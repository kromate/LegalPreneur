import { ref } from 'vue'


export const show = ref(false)
export const modalDetails = ref({})


export const openModal = (data) => {

	modalDetails.value = data
	show.value = true

}


export const cards = [
	{ name: 'Technology Law', icon: 'code', details:`We support our clients in their most strategically important and complex technology projects and transactions. We advise on the full range of legal, regulatory and commercial issues relating to all aspects of business technology and digital transformation.
Our team’s expertise includes technology transactions and corporate tech projects. Our practical approach enables us to develop innovative solutions to the most challenging and strategically significant technology issues facing our clients.` },
	{ name: 'Blockchain Advisory', icon: 'database', details:`We provide legal advisory services to both individuals and companies on all matters relating to Blockchain and Cryptoassets, including cryptocurrencies, NFTs, DeFi, GameFi and other blockchain technology use cases.
We help clients take advantage of blockchain technology's huge potential and disruptive impact, with full knowledge of the ever-developing regulatory compliance and legal requirements.` },
	{ name: 'Due Diligence', icon: 'book-open', details:`We assist start-ups to be investment-ready and conduct due diligence process. We take on the rigors of conducting legal due diligence investigations.
Our due diligence process covers and not limited to; verification of company documents, ownership interests, resolutions, statutory books, records, IP portfolio, Finance and Security Arrangements, organizational structure, Employment Agreements, Financial statements, taxes and other statutory filings.` },
	{ name: 'Venture Capital & Private Equity Advisory', icon: 'coins', details:'Legalpreneur Consulting advises Venture Capital Firms, Private Equity Firms and HNIs on Fund structuring, Due Diligence and Investment Advisory. Our team is always available to conduct critical assessment of business structure, legal and tax implications for Investors and Investees.' },
	{ name: 'Entertainment Law', icon: 'microphone', details:`We provide relevant, industry focused advice, to individuals and businesses that covers the most pertinent issues in the entertainment industry. We provide legal advice to individuals and businesses across the music, TV, film, literary, gaming and digital media industries.
We assist our clients in the negotiation and drafting of contracts and all forms of collaboration agreements in the entertainment industry. We also provide reputation management and brand protection advice.
The internet and newer technologies such as NFTs provide new opportunities but also creating new legal challenges and complexities. We offer unique insight into the industry along with a strong commercial approach that understands the fast-paced needs of the market.` },
	{ name: 'Intellectual Property Law', icon: 'file-invoice', details:`We provide world-class expertise on the full range of patent and intellectual property issues including licensing, litigation and commercial contracts relating to the exploitation of intellectual property.
We identify and protect the intellectual property rights of our clients at each stage of their innovation lifecycle, team of lawyers provides strategic advice spanning all aspects of IP law` },
	{ name: 'Employment and Compensation plan', icon: 'users', details:'Properly Incentivised compensation plans attract and spur talents. motivate high performance within your organisation. We can help you workout Employee contracts with sustainable benefit and compensation plan suiting your business needs in any competitive landscape. ' },
	{ name: 'Litigation and Dispute Resolution', icon: 'gavel', details:`In an increasingly unpredictable world, we understand the different legal and business landscapes from disputes may occur, and this drives our approach to litigation and dispute resolution.
We pursue all avenues of dispute resolution and advise our clients on the method most appropriate to achieve their commercial objectives and resolve the specifics of their issue.  Our approach focuses on resolving disputes quickly and effectively with as little disruption to business as possible.` },
	{ name: 'Asset Recovery', icon: 'file-contract', details:'We provide high-quality asset recovery advice and representation to defendants and claimants in various aspects of asset recovery and utilize effective tools to assist in tracing, identifying, seizing, and recovering client assets of all kinds including cryptocurrency investigations and recovery.' },
	{ name: 'Property and Real estate', icon: 'university', details:`We offer both residential and commercial property law services and professional advice to our clients whether they are looking to relocate, get a mortgage, sell property or are buying property as an investment. 
Our deep understanding of the industry and the way it operates enables us to provide a practical and collaborative approach to problem solving enables us to offer personalized and commercially focused advice.` },
]