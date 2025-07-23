'use client';
import React from "react";
import {Listbox, ListboxItem} from "@heroui/listbox";
import {Spacer} from "@heroui/spacer";

export default function Sheets() {

    return (
        <main className={"w-full"}>
            <h1 className={"mx-auto w-1/3 text-center text-3xl font-bold mb-4"}>
                Sneacos' Google Sheets
            </h1>
            <Listbox className={"text-center w-1/3 mx-auto"} variant={"bordered"}>
                <ListboxItem href={"/sheets/quickbook"}>
                    <p className={"text-xl"}>Sneacos' Quickbook v3.1</p>
                </ListboxItem>
                <ListboxItem target={"_blank"} href={"https://docs.google.com/spreadsheets/d/1j8CqdKSjsnqBKH6BjLCqVgMCHFxkJhPWk2A9Gu1jdeA/edit?gid=0#gid=0"}>
                    <p className={"text-xl"}>Sneacos' Val5 v0.1</p>
                </ListboxItem>
                <ListboxItem target={"_blank"} href={"https://docs.google.com/document/d/1gvCV_NyX3RqnkRJh2_p4FpQcpDQgo-TQQCAHzh99thI/edit?tab=t.0#heading=h.yw5tpdu2qwt5"}>
                    <p className={"text-xl"}>Sneacos' Communication Teminology</p>
                </ListboxItem>
            </Listbox>
        </main>
    );
}