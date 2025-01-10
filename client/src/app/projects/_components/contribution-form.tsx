import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const predefinedAmounts = [10, 50, 100, 1000];

interface ContributionFormProps {
    onSuccess: () => void;
}

export default function ContributionForm({ onSuccess }: ContributionFormProps) {
    const [amount, setAmount] = useState<number | string>("");

    const handleAmountClick = (value: number) => {
        setAmount(value);
    };

    const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle the payment process
        // For this example, we'll just simulate a successful payment
        setTimeout(() => {
            onSuccess();
        }, 1000);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2 sticky">
                {predefinedAmounts.map((value) => (
                    <Button
                        key={value}
                        type="button"
                        variant={amount === value ? "default" : "outline"}
                        onClick={() => handleAmountClick(value)}
                    >
                        Rs{value}
                    </Button>
                ))}
            </div>
            <div>
                <Input
                    type="number"
                    placeholder="Enter custom amount"
                    value={amount || ""}
                    onChange={handleCustomAmountChange}
                    className="w-full"
                />
            </div>
            <div className="flex space-x-2">
                <Button type="submit" className="w-1/2">
                    Pay with eSewa
                </Button>
                <Button type="submit" className="w-1/2">
                    Pay with Khalti
                </Button>
            </div>
        </form>
    );
}