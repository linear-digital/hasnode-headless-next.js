import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google AdSense Meta Tag */}
				<meta name="google-adsense-account" content="ca-pub-4236044300590126" />

				{/* Google AdSense Script */}
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4236044300590126"
					crossOrigin="anonymous"
				></script>
			</Head>
			<body>
				<Main />
				<NextScript />
				<div id="hn-toast" />
			</body>
		</Html>
	);
}
