import App from "@/App.tsx";
import { enableMocking } from "@/server/brower.ts";
import { EnhancedToastProvider } from "@/ui-lib/components/toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

enableMocking({
	serviceWorker: {
		url: "/mockServiceWorker.js",
	},
	onUnhandledRequest: "bypass",
}).then(() => {
	createRoot(document.getElementById("root")!).render(
		<StrictMode>
			<EnhancedToastProvider>
				<App />
			</EnhancedToastProvider>
		</StrictMode>,
	);
});
