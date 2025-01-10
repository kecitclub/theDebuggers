import ProposalForm from "@/components/proposal-form";

export default function ApplyProposal() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Apply for Funding
        </h1>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
          Have a great idea for a project? We're excited to hear about it! Fill
          out the form below to submit your proposal and start your crowdfunding
          journey.
        </p>
        <ProposalForm />
      </main>
    </div>
  );
}
