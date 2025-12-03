import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function AccountPage() {
    return (
        <div className="py-section-xl px-container-px">
            <div className="max-w-3xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle>My Account</CardTitle>
                        <CardDescription>Welcome back, User!</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p>This is your account dashboard. More features coming soon!</p>
                        <Button variant="destructive" asChild>
                            <Link href="/">Log Out</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
