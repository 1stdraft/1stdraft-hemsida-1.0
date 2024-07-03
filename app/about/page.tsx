import { PortableText } from "@portabletext/react";
import { getSettings } from "sanity-utils"

export default async function AboutPage() {
    const settings = await getSettings();

    return (
        <div>
            <h1>{settings.title}</h1>
            <p><PortableText value={settings.about}/></p>
        </div>
    )
}