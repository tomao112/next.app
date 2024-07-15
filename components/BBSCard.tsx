import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from '@/app/types/types';

interface BBSDataProps {
    bbsData: BBSData;
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
    const { id, title, content, createAt, username } = bbsData;
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{username}</CardDescription>
                </CardHeader>
                <CardContent>
                    {content}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={`/bbs-posts/${id}`} className="text-blue-500">read more</Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BBSCard
