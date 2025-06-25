import { Geist, Geist_Mono, Climate_Crisis } from "next/font/google";

export const climateCrisis = Climate_Crisis({
	variable: "--font-climate-crisis",
	subsets: ["latin"],
	display: "swap",
});

export const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
	display: "swap",
});

export const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	display: "swap",
});
