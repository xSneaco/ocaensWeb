'use client';
import React, { useState } from "react";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
import {Button, Divider} from "@heroui/react";
import Names from "@/components/quickbook/Names";
import Tournaments from "@/components/quickbook/Tournaments";
import Mappool from "@/components/quickbook/Mappool";
import UnderConstruction from "@/components/UnderConstruction";
import Reflection from "@/components/quickbook/Reflection";
import Profiles from "@/components/quickbook/Profiles";
import {Accordion, AccordionItem} from "@heroui/accordion";
import Stats from "@/components/quickbook/Stats";
import AddRows from "@/components/quickbook/AddRows";
import {Link} from "@heroui/link";
import {Spacer} from "@heroui/spacer";

export default function QuickbookPage() {
    const [selectedVersion, setSelectedVersion] = useState("3.1");

    let versionIsAvailable: Boolean = selectedVersion === "3.1";

    const handleVersionChange = (key: React.Key) => {
        setSelectedVersion(String(key).replace("-", "."));
    };

    const versionContent: Record<string, React.ReactNode> = {
        "3.1":
            <div>
                <Accordion variant={"shadow"}>
                    <AccordionItem title={"Sheets Basics"}>
                        <AddRows/>
                    </AccordionItem>
                    <AccordionItem title={"Names"}>
                        <Names/>
                    </AccordionItem>
                    <AccordionItem title={"Tournaments"}>
                        <Tournaments/>
                    </AccordionItem>
                    <AccordionItem title={"Map pool"}>
                        <Mappool/>
                    </AccordionItem>
                    <AccordionItem title={"Reflection"}>
                        <Reflection/>
                    </AccordionItem>
                    <AccordionItem title={"Profiles"}>
                        <Profiles/>
                    </AccordionItem>
                    <AccordionItem title={"Stats"}>
                        <Stats/>
                    </AccordionItem>
                </Accordion>
            </div>,
        "3.0": <UnderConstruction/>,
        "2.1": <UnderConstruction/>,
        "2.0": <UnderConstruction/>,
    };

    const versionLastUpdated: Record<string, React.ReactNode> = {
        "3.1": <p className={"text-small text-default-500"}>Last updated: 2025-06-03</p>,
        "3.0": <p className={"text-small text-default-500"}>Last updated: 2025-04-02</p>,
        "2.1": <p className={"text-small text-default-500"}>Last updated: 2025-02-04</p>,
        "2.0": <p className={"text-small text-default-500"}>Last updated: 2024-10-29</p>,
    };

    const linkToVersion: Record<string, string> = {
        "3.1": "https://docs.google.com/spreadsheets/d/1gZwDal5exWt8U6zTpuohjl2BX7eR9_EA-c79w8UzhCw/edit?usp=sharing",
        "3.0": "",
        "2.1": "",
        "2.0": "",
    }

    return (
        <main className={"w-full"}>
            <div>
                <h1 className={"mx-auto w-1/3 text-center text-3xl font-bold"}>
                    Sneacos' Quickbook v{selectedVersion}
                </h1>
                <div className={"w-full text-center"}>
                    {versionLastUpdated[selectedVersion]}
                </div>
            </div>
            <div className={"w-full flex flex-row items-center justify-between"}>
                <Button
                    showAnchorIcon
                    isDisabled={!versionIsAvailable}
                    as={Link}
                    color="primary"
                    target={"_blank"}
                    href={linkToVersion[selectedVersion]}
                    variant="bordered"
                >
                    v{selectedVersion}
                </Button>
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant={"bordered"}>version {selectedVersion}</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" onAction={handleVersionChange}>
                        <DropdownItem key="3-1">version 3.1</DropdownItem>
                        <DropdownItem key="3-0">version 3.0</DropdownItem>
                        <DropdownItem key="2-1">version 2.1</DropdownItem>
                        <DropdownItem key="2-0">version 2.0</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <Divider className={"mt-8"}/>
            <div className={"w-full text-center mt-8"}>
                {versionContent[selectedVersion]}
            </div>
            <Spacer y={8}/>
        </main>
    );
}