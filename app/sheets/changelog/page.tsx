'use client';
import React from "react";
import {ChangelogVersionUpdate} from "@/components/ChangelogVersionUpdate";
import {Accordion, AccordionItem} from "@heroui/accordion";
import {Spacer} from "@heroui/spacer";

export default function Changelogs() {

    return (
        <main className={"max-w-3xl mx-auto"}>
            <Accordion
                defaultExpandedKeys={["3.1"]}
                variant={"bordered"}
            >
                <AccordionItem key="3.1" title="Version 3.1">
                    <ChangelogVersionUpdate updates={["Bugfixes", "Changed ESEA S52 to ESEA S53"]} />
                </AccordionItem>
                <AccordionItem key="3.0" title="Version 3.0">
                    <ChangelogVersionUpdate updates={[
                        "Added \"Protocols\" and \"ProcolDatabase\" tabs",
                        "Reworked VetoPrep for better readability",
                        "Added Filter options to \"Profiles\" tab", 
                        "Fixed Reflection still showing Vertigo instead of Train as option for Map"
                    ]}/>
                </AccordionItem>
            </Accordion>
            <Spacer y={4}/>
            <Accordion
                defaultExpandedKeys={["3.1"]}
                variant={"bordered"}
            >
                <AccordionItem key="2.1" title="Version 2.1">
                    <ChangelogVersionUpdate updates={[
                        "Added Train",
                        "Updated TargetRatings",
                        "Fixed VetoPrep 2.0 BO1, BO2, BO3 exceeding 100% WinRate"
                    ]}/>
                </AccordionItem>
                <AccordionItem key="2.0" title="Version 2.0">
                    <ChangelogVersionUpdate updates={[
                        "Fully replaced the Veto Prep (the old Veto Prep is still available as a hidden sheet)",
                        "Added filter option to stats sheet",
                        "Added \"Maps Played\" to each player and map at stats tab",
                        "Removed \"Map Complexity\" from strat section",
                        "Removed \"ToDo\" and \"Calendar\" sheets"
                    ]}/>
                </AccordionItem>
            </Accordion>
            <Spacer y={4}/>
            <Accordion
                defaultExpandedKeys={["3.1"]}
                variant={"bordered"}
            >
                <AccordionItem key="1.2" title="Version 1.2">
                    <ChangelogVersionUpdate updates={[
                        "Moved win% next to the maps in \"Veto Prep\" for easier readability",
                        "Fixed map win% for maps in \"Stats\" tab",
                        "Fixed Overpass references",
                        "Added total maps played to \"Profiles\" tab",
                        "Added a ToDo list tab",
                        "Added a \"Calendar\" tab"
                    ]}/>
                </AccordionItem>
                <AccordionItem key="1.1" title="Version 1.1">
                    <ChangelogVersionUpdate updates={[
                        "Fixed KAST% field in profiles",
                        "Fixed stats not counting",
                        "Fixed Veto Prep not working correctly",
                        "Actually added a Feedback link",
                        "Switched from subdomain \"changelog.ocaens.de\" to \"ocaens.de/changelog\"",
                    ]}/>
                </AccordionItem>
                <AccordionItem key="1" title="Version 1">
                    <ChangelogVersionUpdate updates={[
                        "Overhauled the Home tab",
                        "Made Profiles more scaleable",
                        "Added a Media tab",
                        "Added a Feedback link",
                        "First Full Release",
                    ]}/>
                </AccordionItem>
            </Accordion>
            <Spacer y={4}/>
            <Accordion
                defaultExpandedKeys={["3.1"]}
                variant={"bordered"}
            >
                <AccordionItem key="0.4" title="Version 0.4">
                    <ChangelogVersionUpdate updates={[
                        "Revised the Profiles tab",
                        "Added more link options in the Reflection tab",
                        "Revised the Stats tab to be more scaleable",
                    ]}/>
                </AccordionItem>
                <AccordionItem key="0.3" title="Version 0.3">
                    <ChangelogVersionUpdate updates={[
                        "HLTV Rating 2.0 Auto Calculato",
                        "KAST% Field (to calculate the KAST% you can use the CS Demo Manager)",
                        "Profiles now only take official matches into consideration",
                    ]}/>
                </AccordionItem>
                <AccordionItem key="0.2" title="Version 0.2">
                    <ChangelogVersionUpdate updates={[
                        "Added overtime section for rounds won/lost",
                        "Added links section for links to VODs or Leetify",
                        "Added HLTV like profiles tab",
                        "Added utility sections for strats to note how much utility a strat needs",
                        "Added media section for strats to save links to lineup videos or pictures",
                        "Added position drop down menu",
                        "Added HLTV Rating 2.0 Delta to stats according to player positions (only works when using the positions provided in the position drop down menu)",
                        "Expanded veto simulation to account for which team bans first"
                    ]}/>
                </AccordionItem>
            </Accordion>
        </main>
    );
}