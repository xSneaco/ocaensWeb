"use client"

import {Navbar} from "@heroui/navbar";
import {Logo} from "@/components/icons";
import {Card, CardHeader, CardBody, Divider} from "@heroui/react";

export default function Home() {
  return (
    <main>
      <Navbar />
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Logo/>
                <p>Quickbook v3.1</p>
                <p className="text-small text-default-500"></p>
            </CardHeader>
            <Divider />
            <CardBody>
                fniaofnewinoawf
            </CardBody>
        </Card>
    </main>
  );
}
