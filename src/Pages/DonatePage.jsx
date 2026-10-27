import { Window } from "../App";
import { copyToClipboard } from "../Components/Modals";
import "./DonatePage.scss";
import { Header } from "./Home";
import QrCode from "../Components/General/QrCode";

const cryptoWallets = {
	"Monero (XMR) - preferred": "8ANnJ8Corb3FPVvknrprmQdCsPEmQ9dJMDx8ZpaZHgcViCSKZSwYg7eJEwF8UbTxmAA3mLB4hyELiVteF2gdAVYXGejGMfG",
	"Litecoin (LTC)": "ltc1qrlva4wd8emzznpgmdpcsqqnxwlkv60eehmjwj4"
};

export default function DonatePage() {
	return (
		<div className="DonatePage">
			<Header />

			<div className="Contents">
				<Window title="How your donations help ♥">
					<p>
						I strive to make all of my projects free and open-source. Donations help me stay alive and upkeep any database/server costs for projects that require it, along with the yearly charge for domains.
					</p>

					<p>
						Donations from those who can afford it help me to keep my projects free for those who can't.
					</p>
				</Window>

				<Window title="PayPal">
					<p>
						You can find my PayPal.me link below, or you may copy my PayPal email address directly.
					</p>

					<div className="Links FlexCenter">
						<a href="https://paypal.me/israelboone">
							PayPal.me
						</a>

						<a href="#" onClick={() => copyToClipboard("metalloriff@proton.me")}>
							Copy Email Address
						</a>
					</div>
				</Window>

				<Window title="Ko-fi">
					<p>
						I also have a Ko-fi page, where you have the option to make one-time donations or set up monthly contributions.
					</p>

					<div className="Links FlexCenter">
						<a href="https://ko-fi.com/rivaeros">
							Ko-fi.com/RIVAEROS
						</a>
					</div>
				</Window>

				<div className="Wallets">
					{Object.keys(cryptoWallets).map(key => (
						<Window title={key} key={key}>
							<div className="Wallet">
								<p
									className="Address FlexCenter"
									onClick={() => {
										copyToClipboard(
											cryptoWallets[key]
										);
									}}
								>
									{cryptoWallets[key]}
								</p>

								<QrCode>
									{cryptoWallets[key]}
								</QrCode>
							</div>
						</Window>
					))}
				</div>
			</div>
		</div>
	);
}