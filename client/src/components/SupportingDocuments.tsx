import { FileText, FileSpreadsheet, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Document {
    name: string;
    type: string;
    url: string;
}

interface SupportingDocumentsProps {
    documents: Document[];
}

export default function SupportingDocuments({
    documents,
}: SupportingDocumentsProps) {
    const getFileIcon = (type: string) => {
        switch (type) {
            case "pdf":
                return <FileText className="h-8 w-8 text-red-500" />;
            case "xlsx":
                return <FileSpreadsheet className="h-8 w-8 text-green-500" />;
            default:
                return <FileText className="h-8 w-8 text-gray-500" />;
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.length > 0 ? (
                documents.map((doc, index) => (
                    <Card key={index}>
                        <CardContent className="flex items-center justify-between p-4">
                            <div className="flex items-center space-x-4">
                                {getFileIcon(doc.type)}
                                <div>
                                    <p className="font-semibold">{doc.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {doc.type.toUpperCase()}
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <a href={doc.url} download>
                                    <Download className="mr-2 h-4 w-4" />
                                    Download
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                    No Supporting Documents Available
                </div>
            )}
        </div>
    );
}