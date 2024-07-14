import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>Deploy your new project in one-click.</CardDescription>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dicta dolores quidem dolorem aspernatur animi, velit illum tempora, maiores sunt, vero obcaecati quibusdam delectus ab necessitatibus. Voluptas laudantium odio fugiat.
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={"/"} className="text-blue-500">read more</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BBSCard
