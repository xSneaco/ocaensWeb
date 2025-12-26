"use client"

import {Navbar} from "@heroui/navbar";
import {Logo} from "@/components/icons";
import {Card, CardHeader, CardBody, Divider} from "@heroui/react";
import {Spacer} from "@heroui/spacer";
import {CardFooter} from "@heroui/card";
import {Link} from "@heroui/link";

export default function Home() {
  return (
      <main>
          <Navbar/>
          <aside id="default-sidebar"
                 className="fixed right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                 aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto">
                  <Card className="max-w-[400px]">
                      <CardHeader className="flex gap-3">
                          <Logo/>
                          <p className="text-md">Quickbook v3.1</p>
                          <Link isExternal showAnchorIcon href="https://docs.google.com/spreadsheets/d/1gZwDal5exWt8U6zTpuohjl2BX7eR9_EA-c79w8UzhCw/edit?usp=sharing"></Link>
                      </CardHeader>
                  </Card>
              </div>
          </aside>
          <div>
              <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%">
                  <h1 className={"font-bold text-5xl text-center"}><p
                      className={"text-shadow-lg text-shadow-white text-purple-800"}>ocaens.de</p>
                  </h1>
              </div>
          </div>
      </main>
  );
}
