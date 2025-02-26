import { Head, Html, Main, NextScript } from 'next/document';

declare module 'react' {
	interface HTMLAttributes<T> {
		amp?: string;
	}
}

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'amp-auto-ads': any;
		}
	}
}

export default function Document() {
	return (
		<Html lang="en" amp="">
			<Head>
				{/* Google AdSense Meta Tag */}
				<meta name="google-adsense-account" content="ca-pub-4236044300590126" />

				{/* Google AdSense Script */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236044300590126"
				></script>

				{/* AMP Auto Ads Script */}
				<script
					async
					custom-element="amp-auto-ads"
					src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
				></script>
				
			</Head>
			<body>
				{/* AMP Auto Ads */}
				<amp-auto-ads type="adsense" data-ad-client="ca-pub-4236044300590126"></amp-auto-ads>

				<Main />
				<NextScript />
				<div id="hn-toast" />
			</body>
		</Html>
	);
}