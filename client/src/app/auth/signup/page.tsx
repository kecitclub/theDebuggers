import { cn } from "@/lib/utils";
import RegisterForm from "@/components/auth/register-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrganizationRegisterForm from "@/components/auth/vendor-register-form";
import VendorRegisterForm from "@/components/auth/vendor-register-form";
import { SiteHeader } from "@/components/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader />

      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-lg">
          <div className={cn("flex flex-col gap-6")}>
            <Tabs defaultValue="user">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="user">User</TabsTrigger>
                <TabsTrigger value="vendor">Organization</TabsTrigger>
              </TabsList>
              <TabsContent value="user">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Signup</CardTitle>
                    <CardDescription>
                      Create your account in Ek Kadam.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RegisterForm />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="vendor">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Signup</CardTitle>
                    <CardDescription>
                      Create your account in Ek Kadam.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* <RegisterForm /> */}
                    <VendorRegisterForm />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
