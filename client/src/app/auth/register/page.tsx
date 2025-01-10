"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface props {
  placeholder: string;
  type: string;
  require?: boolean;
  onChange?: () => void;
  name: string;
}
const InputField = ({
  name,
  onChange,
  placeholder,
  require = true,
  type,
}: props) => {
  return (
    <div className="w-full">
      <Label htmlFor={`${name}`}>{placeholder}</Label>
      <Input
        id={`${name}`}
        name={`${name}`}
        required={require}
        type={`${type}`}
        placeholder={`${placeholder}`}
      />
    </div>
  );
};

const page = () => {
  return (
    <>
      <Tabs defaultValue="account" className="max-w-5xl mx-auto my-16">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">User</TabsTrigger>
          <TabsTrigger value="password">Organization</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="first name" type="text" />
                <InputField name="name" placeholder="last name" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="email" type="email" />
                <InputField name="name" placeholder="Provience" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="district" type="email" />
                <InputField name="name" placeholder="municiplity" type="text" />
              </div>
              <InputField name="name" placeholder="address" type="text" />
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="first name" type="text" />
                <InputField name="name" placeholder="last name" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="email" type="email" />
                <InputField name="name" placeholder="Provience" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="district" type="email" />
                <InputField name="name" placeholder="municiplity" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="address" type="email" />
                <InputField name="name" placeholder="chairman" type="text" />
              </div>
              <div className="flex gap-2 w-full items-center justify-evenly ">
                <InputField name="name" placeholder="stamp" type="email" />
                <InputField name="name" placeholder="est-date" type="text" />
              </div>
              <InputField name="name" placeholder="pan no" type="text" />
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default page;
