import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define the type for the 'content' object
type Content = {
  location: string;
  target_community: string;
  estimated_start_date: string;
  expected_completion_date: string;
  expected_impact: string;
  urgent: string;
  timelines: Array<{
    name: string;
    start_date: string;
    end_date: string;
    estimated_cost: string;
  }>;
  documents: object; // This can be refined based on the actual structure of 'documents'
};

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

async function checkForSpam(content: Content, userId: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    You are a highly advanced AI model trained to detect and classify spam content based on various characteristics. Your task is to analyze the following project submission and determine whether it is likely to be spam.

    **Spam Criteria to Consider:**
    - **Excessive or Manipulative Language:** Look for exaggerations, unclear claims, or manipulative tones designed to deceive or confuse the reader.
    - **Suspicious Patterns:** Look for repeated or excessive keywords, vague content, unusual phrasing, or irrelevant details that are not typical for a legitimate submission.
    - **Missing Information or Gaps:** Pay attention to incomplete or missing details, such as empty fields for "timelines" or "documents," which might indicate spam.
    - **Unusual Formatting:** Consider formatting issues like the presence of odd characters, excessive whitespace, or mismatched dates that might signal a fraudulent or incomplete submission.
    - **Irrelevant or Unrelated Data:** Check for content that doesn't match the context or field it is placed in (e.g., unusual or unrelated information in "location" or "target community").
    - **Suspicious User Behavior:** Consider the user's previous behavior (e.g., lack of previous history, new or incomplete profiles, or multiple suspicious submissions) that could indicate spam.

    **The Content to Analyze:**
    - **Location**: ${content.location}
    - **Target Community**: ${content.target_community}
    - **Estimated Start Date**: ${content.estimated_start_date}
    - **Expected Completion Date**: ${content.expected_completion_date}
    - **Expected Impact**: ${content.expected_impact}
    - **Urgency**: ${content.urgent}
    - **Timelines**: ${
      content.timelines && content.timelines.length > 0
        ? content.timelines
            .map(
              (timeline) =>
                `Name: ${timeline.name}, Start Date: ${timeline.start_date}, End Date: ${timeline.end_date}, Estimated Cost: ${timeline.estimated_cost}`
            )
            .join(", ")
        : "No timelines provided."
    }
    - **Documents**: ${
      content.documents && Object.keys(content.documents).length > 0
        ? JSON.stringify(content.documents)
        : "No documents attached."
    }
    - **User ID**: ${userId}

    **Please Respond with a JSON Object containing:**
    - **isSpam (boolean)**: true if the content is likely spam, false if the content appears legitimate.
    - **confidence (number between 0 and 1)**: A number indicating how confident the AI is in its spam classification, with 0 being the least confident and 1 being the most confident.
    - **reasons (array of strings)**: Detailed reasons explaining why the content is considered spam or not. This should include any patterns, keywords, inconsistencies, missing data, or other factors that lead to the classification.

    Consider each field carefully and apply the following:
    - **Does the content make sense given the fields and context?**
    - **Are there any inconsistencies, like missing data in fields that should have information?**
    - **Does the content contain any vague, manipulative, or unrelated information?**
    - **Are there empty fields or incomplete sections that seem like they could be spammy attempts to bypass the system?**

    **Use all the information provided to make a thorough analysis.**
  `;

  const result = await model.generateContent(prompt);

  let response;
  try {
    // Remove the triple backticks and add missing commas between array items
    const cleanedResponse = result.response
      .text()
      .replace(/^```json|```$/g, "")
      .trim();

    // Add commas between array items if missing (fixes the bad formatting)
    const fixedResponse = cleanedResponse.replace(
      /"([^"]+)": ([^,]+)\s*"([^"]+)":/g,
      '"$1": $2, "$3":'
    );

    // Parse the cleaned response
    response = JSON.parse(fixedResponse);
  } catch (e) {
    console.error("Failed to parse AI response:", e);
    response = { error: "Failed to parse the response from the AI." };
  }

  return response;
}

export async function POST(request: Request) {
  try {
    const { content, userId } = await request.json();

    // Check if content and userId are provided
    if (!content || !userId) {
      return NextResponse.json(
        { error: "Missing content or userId" },
        { status: 400 }
      );
    }

    // Proceed to check for spam
    const spamCheckResult = await checkForSpam(content, userId);

    // Return the AI's result in JSON format
    return NextResponse.json(spamCheckResult);
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
