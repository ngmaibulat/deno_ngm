import { Head } from '$fresh/runtime.ts'
import Counter from '../islands/Counter.tsx'

export default function Home() {
    return (
        <>
            <Head>
                <title>NGM</title>
            </Head>
            <div class="p-4 mx-auto max-w-screen-md">
                <ul>
                    <li>
                        <a href="/release-2023-01-30/mailgw-0.0.3.tar.gz">
                            Mail Gw
                        </a>
                    </li>
                    <li>
                        <a href="/release-2023-01-30/mailgw-logservice-0.0.2.tar.gz">
                            Log Service
                        </a>
                    </li>
                    <li>
                        <a href="/release-2023-01-27/mailgw-webui-v.0.2.tar.gz">
                            Web UI
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
