
const showError_MissingMetamask = () => {
	showError('Please install Metamask to enjoy the full features in this website.', true)
}

const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseTokenURI",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Paused",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "Unpaused",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "MAX_TOKENS",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseTokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "hasPresaleAccess",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mainSale",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxMint",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pause",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "paused",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "preMint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "preMintPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "presaleAccessList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "_data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_baseTokenURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_contractURI",
				"type": "string"
			}
		],
		"name": "setContractURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_maxMint",
				"type": "uint256"
			}
		],
		"name": "setMaxMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPreMintPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_addressList",
				"type": "address[]"
			}
		],
		"name": "setPresaleAccessList",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "start",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "tokenOfOwnerByIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_mainSale",
				"type": "bool"
			}
		],
		"name": "updateMainSaleStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "walletOfOwner",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawAll",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}
]

const contractAddress = '0x35f33d396911884CD749EB7Fcf558B37fFAcc5aD'

var hasMetamask = false
var provider = undefined
var signer = undefined
var contract = undefined

if (window.ethereum == undefined) {
	// showError_MissingMetamask()
	provider = new ethers.providers.JsonRpcProvider('https://rinkeby.infura.io/v3/a055615e194745af96b3ad0be2248a66')
	signer = provider.getSigner()
	contract = new ethers.Contract(contractAddress, abi, provider)
	hasMetamask = true
}
else {
	provider = new ethers.providers.Web3Provider(window.ethereum)
	signer = provider.getSigner()
	contract = new ethers.Contract(contractAddress, abi, provider)
	hasMetamask = true
}

async function updateContractInfo() {
	var title = $('#mintTitle')
	var totalSupply_element = $('#totalSupply')
	var price = $('#mintPrice')

	var totalSupply = String(await contract.totalSupply())
	var maxSupply = String(await contract.MAX_TOKENS())

	totalSupply_element.text(`${totalSupply}/${maxSupply}`)

	if (await contract.mainSale()) {
		title.text('Public sales is live')
		var publicPrice = ethers.utils.formatUnits(await contract.price())
		price.text(String(publicPrice))
	} else {
		title.text('Whitelist sales is live')
		var privatePrice = ethers.utils.formatUnits(await contract.preMintPrice())
		price.text(String(privatePrice))
	}
}

async function accountConnected_function(account) {
	Toast.fire({
		icon: 'success',
		title: 'Metamask connected!'
	});

	var mintBtn = $('#mint_button')
	mintBtn.text('Mint')

	var totalPrice = 0
	if (await contract.mainSale()) {
		totalPrice = ethers.utils.formatUnits(await contract.price())
	} else {
		totalPrice = ethers.utils.formatUnits(await contract.preMintPrice())
	}

	mintBtn.on('click.mint', async () => {
		var signerContract = new ethers.Contract(contractAddress, abi, signer)
		showLoading()
		var isMainSale = await signerContract.mainSale()
		if (isMainSale) {
			signerContract.mint(account, 1, { value: ethers.utils.parseEther(totalPrice.toString()) })
				.then((res) => {
					Swal.close()
					showSuccess('Mint completed. Pending transaction...')
				})
				.catch((err) => {
					Swal.close()
					showError(err.message)
				})
		} else {
			signerContract.preMint(account, 1, { value: ethers.utils.parseEther(totalPrice.toString()) })
				.then((res) => {
					Swal.close()
					showSuccess('Presale Mint completed. Pending transaction...')
				})
				.catch((err) => {
					Swal.close()
					showError(err.message)
				})
		}
	})

	document.querySelector('#mint_button').onmouseenter = () => {
		document.querySelector('.cat1').style.display = 'none'
		document.querySelector('.cat2').style.display = 'block'
	}

	document.querySelector('#mint_button').onmouseleave = () => {
		document.querySelector('.cat1').style.display = ''
		document.querySelector('.cat2').style.display = ''
	}
}

function checkNetwork_function(account) {
	if (provider.network.chainId == 4) {
		accountConnected_function(account)
	} else {
		showLoading()
		provider.send('wallet_switchEthereumChain', [{
			chainId: '0x4'
		}])
			.then(() => {
				Swal.close()
				location.reload()
			})
			.catch((err) => {
				Swal.close()
				showError(err.message)
			})
	}
}

async function mintSetup() {
	var mintBtn = $('#mint_button')
	mintBtn.text('Connect to Wallet')

	var accounts = []
	if (hasMetamask) {
		accounts = await provider.listAccounts()
	}
	if (accounts.length > 0) {
		checkNetwork_function(accounts[0])
	} else {
		mintBtn.on('click.requestAccounts', () => {
			if (!hasMetamask) {
				showError_MissingMetamask()
				return
			}
			showLoading()
			provider.send('eth_requestAccounts', [])
				.then((res) => {
					Swal.close()
					mintBtn.off('click.requestAccounts')
					checkNetwork_function(res[0])
				})
				.catch((err) => {
					Swal.close()
					showError(err.message)
				})
			mintBtn.blur()
		})
	}
}

function generateFAQ() {
	const question = [
		'What is NFT?',
		'What is Metamask?',
		'How to buy CherryCat (computer)?',
		'How to buy CherryCat (mobile)?'
	]

	const answers = [
		'NFT stands for Non-Fungible Tokens where each token represents a single and truly unique CherryCat that YOU can buy, own and trade.',
		'Metamask is a crypto wallet that can store your Ethereum, and is needed to purchase and mint CherryCat. Learn more about what it does and how it works <a href="https://metamask.io/" target="_blank">here</a>.',
		'Make sure Metamask extension is installed in your browser. After connecting your Metamask with our browser, you\'ll be able to click the “Mint” button to buy a few CherryCats.',
		'Make sure the Metamask application is installed on your mobile. Launch the app and use its built in browser, then navigate to cherrycat.io to start minting.'
	]

	const faqSection = document.querySelector('#faqSection')
	const faqSection_m = document.querySelector('#faqSection_m')

	question.forEach((q, index) => {
		var faqItem = document.createElement('div')
		faqItem.classList.add('accordion-item')

		var faqHeader = document.createElement('h2')
		faqHeader.classList.add('accordion-header')
		var faqButton = document.createElement('button')
		faqButton.classList.add('accordion-button', 'collapsed')
		faqButton.type = 'button'
		faqButton.setAttribute('data-bs-toggle', 'collapse')
		faqButton.setAttribute('data-bs-target', `#faq_${index}`)
		faqButton.setAttribute('aria-expanded', 'false')
		faqButton.setAttribute('aria-controls', `faq_${index}`)
		faqButton.textContent = q
		faqHeader.append(faqButton)

		var faqBodyContainer = document.createElement('div')
		faqBodyContainer.classList.add('accordion-collapse', 'collapse')
		faqBodyContainer.id = `faq_${index}`
		faqBodyContainer.setAttribute('aria-labelledby', `faqHeader_${index}`)
		faqBodyContainer.setAttribute('data-bs-parent', '#faqSection')
		var faqBody = document.createElement('div')
		faqBody.classList.add('accordion-body')
		faqBody.innerHTML = answers[index]
		faqBodyContainer.append(faqBody)

		faqItem.append(faqHeader, faqBodyContainer)

		faqSection.append(faqItem)
		faqSection_m.append(faqItem.cloneNode(true))
	})
}

function onScreenResize() {
	var loadingScreen = document.querySelector('.loading')
	loadingScreen.style.display = 'none'
	document.querySelector('.sections').classList.remove('hide')

	if (window.innerWidth <= 768) {
		document.querySelector('#section-04').style.display = 'none'
		document.querySelector('#section-04-alt').style.display = ''
	}
	else {
		document.querySelector('#section-04').style.display = ''
		document.querySelector('#section-04-alt').style.display = 'none'
	}

	const section1_bg_height = document.querySelector('.section1-bg').clientHeight
	document.querySelector('#section-01').style.height = `${section1_bg_height}px`

	var section4_bg_height = document.querySelector('.section4-bg').clientHeight
	section4_bg_height += window.outerHeight * 0.2
	section4_bg_height -= 5
	document.querySelector('#section-04').style.height = `${section4_bg_height}px`
}

window.onresize = () => {
	if (document.readyState == "complete") {
		onScreenResize()
	}
}

document.onreadystatechange = function () {
	if (document.readyState == "complete") {
		onScreenResize()
		updateContractInfo()
		generateFAQ()
	}
}

$('#mintModal').on('show.bs.modal', () => {
	mintSetup()
})

const interval = setInterval(function () {
	updateContractInfo()
}, 5000);

$(window).scroll(function () {
	var scroll = $(window).scrollTop();

	if (scroll >= 500) {
		document.querySelector('.CherryCatLogo_Fixed').parentElement.classList.add("scrollLogo");
	} else {
		document.querySelector('.CherryCatLogo_Fixed').parentElement.classList.remove("scrollLogo");
	}
});

$('img').on('dragstart', function (event) { event.preventDefault(); });

$('video').on('dragstart', function (event) { event.preventDefault(); });

$("video.rarity_icon").each(function(){ this.play(); });
