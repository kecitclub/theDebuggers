'use client'
import {
  ArrowDown,
  ArrowUp,
  Users,
  ShoppingCart,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import StackBars from "@/components/Dashboard/chats/bar";
import PieArcLabel from "@/components/Dashboard/chats/piarclevel";
import AnimatedValue from "@/components/AnimatedText";

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground ">
      <div className=" mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Projects</p>
                  <p className="text-2xl font-bold"><AnimatedValue value={12}/></p>
                </div>
                <div className="h-10 w-10 bg-emerald-500/10 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-emerald-500" />
                </div>
              </div>
             
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Donation</p>
                  <p className="text-2xl font-bold">${<AnimatedValue value={7799}/>}</p>
                </div>
                <div className="h-10 w-10 bg-red-500/10 rounded-full flex items-center justify-center">
                  <ShoppingCart className="h-5 w-5 text-red-500" />
                </div>
              </div>
              
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Engagement</p>
                  <p className="text-2xl font-bold"><AnimatedValue value={256}/>%</p>
                </div>
                <div className="h-10 w-10 bg-yellow-500/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-yellow-500" />
                </div>
              </div>
              {/* <div className="flex items-center mt-4 text-sm text-yellow-500">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+10%</span>
              </div> */}
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center pr-4 gap-3">
          <StackBars />
          <div className="bg-white flex place-content-center h-full  rounded-lg shadow-xl">
            <PieArcLabel />
          </div>
        </div>
        <h1 className="text-3xl font-bold ">Donations</h1>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="font-semibold">${transaction.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.date} via {transaction.via}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{transaction.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">
                          {transaction.user}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {transaction.userInfo}
                        </p>
                      </div>
                    </div>
                    {/* <Badge>{transaction.percentage}%</Badge> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

const transactions = [
  {
    amount: "100.53",
    date: "3 days ago",
    via: "Turcotte",
    user: "Howell Hand",
    userInfo: "May 4, 2024",
    status: "completed",
  },
  {
    amount: "470.26",
    date: "3 days ago",
    via: "Murazik - Graham",
    user: "Hope Howe",
    userInfo: "Dec 3, 2023 ",
    percentage: 68,
    status: "completed",
  },
  {
    amount: "971.34",
    date: "5 days ago",
    via: "Fahey - Kessler",
    user: "Nelson Jerde",
    userInfo: "May 16, 2024",
    percentage: 30,
    status: "destructive",
  },
  {
    amount: "374.63",
    date: "7 days ago",
    via: "Collier - Huel",
    user: "Kim Weimann",
    userInfo: "May 4, 2023 ",
    percentage: 15,
    status: "destructive",
  },
];
