import * as Feather from "react-feather";
import Icon from "../../Assets/Logo.png";
import { copyToClipboard } from "../Modals";
import Tooltip from "../Tooltip";
import "./PageFooter.scss";

export default function PageFooter() {
	const contacts = {
		website: () => window.open("https://rivaeros.com/", "_blank"),
		github: () => window.open("https://github.com/RIVAEROS", "_blank"),
		email: () => window.open("https://rivaeros.com/contact", "_blank"),
		discord: () => copyToClipboard("@rivaeros")
	};

	return (
		<footer>
			<div className="Flex">
				<div className="LeftSections">
					<div className="HeadSection FlexCenter">
						<img className="Logo" src={Icon} alt="Logo" />

						<div className="BodySection">
							<h2>RIVÆROS</h2>

							<div>
								Web designer
							</div>
						</div>
					</div>

					<div className="ContactSection Flex">
						<div className="ContactEntry" onClick={contacts.website}>
							<Feather.Globe />
							<Tooltip>Website</Tooltip>
						</div>

						<div className="ContactEntry" onClick={contacts.github}>
							<Feather.GitHub />
							<Tooltip>GitHub</Tooltip>
						</div>

						<div className="ContactEntry" onClick={contacts.email}>
							<Feather.Mail />
							<Tooltip>Contact</Tooltip>
						</div>

						<div className="ContactEntry" onClick={contacts.discord}>
							<Feather.MessageSquare />
							<Tooltip>Discord</Tooltip>
						</div>
					</div>
				</div>

				<div className="MiddleSection">
					{/*  TODO add some shit here.  */}
				</div>

				<div className="RightSections FlexCenter">
					<div className="LinksSection Flex">
						<div className="Contents Flex">
							<div className="Title">RIVÆROS</div>
							<a href="https://rivaeros.com/">Root</a>
							<a href="https://requiem.rivaeros.com/">Requiem</a>
						</div>

						<div className="Contents Flex">
							<div className="Title">Navigate</div>
							<a href="/">Home</a>
							<a href="/#about_me">About Me</a>
							<a href="/contact">Contact</a>
							<a href="/donate">Donate</a>
						</div>

						<div className="Contents Flex">
							<div className="Title">Resources</div>
							<a href="https://rivaeros.github.io/city-fog">Color Palette</a>
							<a href="https://feathericons.com">Icons Used</a>
							<a href="https://github.com/RIVAEROS/rivaeros.github.io">Source Code</a>
						</div>

						<div className="Contents Flex">
							<div className="Title">RIVÆROS</div>
							<a href="https://rivaeros.com/donate">Support Me</a>
							<a href="https://rivaeros.com">My Projects</a>
							<a href="https://rivaeros.com/contact">Contact</a>
						</div>
					</div>
				</div>
			</div>

			<div className="Copyright FlexCenter">
				Copyright© {new Date().getFullYear()} RIVÆROS
			</div>
		</footer>
	);
}