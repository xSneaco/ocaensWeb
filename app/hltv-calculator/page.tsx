'use client';
import { Navbar } from "@heroui/navbar";
import {Input, Textarea} from "@heroui/input";
import {Button, ButtonGroup} from "@heroui/button";
import {Form} from "@heroui/form";
import {NumberInput} from "@heroui/number-input";
import React from "react";

export default function HLTV() {

    const [kills, setKills] = React.useState<number>();
    const [deaths, setDeaths] = React.useState<number>();
    const [assists, setAssists] = React.useState<number>();
    const [adr, setAdr] = React.useState<number>();
    const [kast, setKast] = React.useState<number>();
    const [totalRounds, setTotalRounds] = React.useState<number>();

    const [resultDave, setResultDave] = React.useState<number>();
    const [resultBrasil, setResultBrasil] = React.useState<number>();
    console.log(kills)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!kills || !deaths || !assists || !adr || !kast || !totalRounds) {
            alert("Please enter valid numbers for all fields.");
            return;
        }

        const AssistsPerRound = assists / totalRounds;
        const DeathsPerRound = deaths / totalRounds;
        const KillsPerRound = kills / totalRounds;
        const impact = 2.13 * KillsPerRound + 0.42 * AssistsPerRound - 0.41;

        //((0.405022 * KPR) - (0.657678 * DPR) + (0.00524246 * parseFloat(varKast.value)) + (Impact / 5) + (0.00410341 * parseFloat(varAdr.value)) + 0.343334).toFixed(2);
        setResultDave(parseFloat((0.00738764 * kast + 0.35912389 * KillsPerRound - 0.5329508 * DeathsPerRound + 0.2372603 * impact + 0.0032397 * adr + 0.15872723249055132).toFixed(2)));
        setResultBrasil(parseFloat((0.405022 * KillsPerRound + 0.657678 * DeathsPerRound - 0.00524246 * kast + impact / 5 + 0.00410341 * adr + 0.343334).toFixed(2)));

    }
    return (
        <main>
            <Navbar/>
            <Form className={"grid grid-cols-2 gap-2 w-1/2 mx-auto"} onSubmit={onSubmit}>
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setKills(typeof value === 'number' ? value : undefined)}
                    label={"Kills"}
                    value={kills}
                    minValue={0}
                />
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setDeaths(typeof value === 'number' ? value : undefined)}
                    label={"Deaths"}
                    value={deaths}
                    minValue={0}
                />
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setAssists(typeof value === 'number' ? value : undefined)}
                    label={"Assists"}
                    value={assists}
                    minValue={0}
                />
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setAdr(typeof value === 'number' ? value : undefined)}
                    label={"ADR"}
                    value={adr}
                    minValue={0}
                />
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setKast(typeof value === 'number' ? value : undefined)}
                    label={"KAST%"}
                    value={kast}
                    minValue={0}
                    maxValue={100}
                />
                <NumberInput
                    isRequired
                    hideStepper
                    onChange={(value) => setTotalRounds(typeof value === 'number' ? value : undefined)}
                    label={"Total Rounds"}
                    value={totalRounds}
                    minValue={0}
                />

                <Button
                    color={"primary"}
                    type="submit"
                    className={"col-span-2"}
                >
                    Calculate HLTV Rating
                </Button>
                <Textarea
                    label={"Dave Rating"}
                    isReadOnly
                    placeholder={""}
                    value={resultDave?.toString() || ""}
                    variant={"bordered"}
                    maxRows={1}
                />
                <Textarea
                    label={"Brasil Rating"}
                    isReadOnly
                    placeholder={""}
                    value={resultBrasil?.toString() || ""}
                    variant={"bordered"}
                    maxRows={1}
                />
            </Form>
            <p className={"text-center"}>
                This is just an estimated HLTV 2.0 Rating and may differ from the actual one.<br/>
                This is based off <a href={"https://www.hltv.org/forums/threads/2433094/rating-20"} className={"underline"}>BrasiI</a>'s formula calculation aswell as <a href={"https://web.archive.org/web/20241218023441/https://flashed.gg/posts/reverse-engineering-hltv-rating/"} className={"underline"}>Dave</a>'s formula
            </p>
        </main>
    );

}
