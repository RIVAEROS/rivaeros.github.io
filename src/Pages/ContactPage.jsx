import React from "react";
import { Send } from "react-feather";
import { Window } from "../App";
import LinkWrapper from "../Components/LinkWrapper";
import { copyToClipboard } from "../Components/Modals";
import "./ContactPage.scss";
import { Header } from "./Home";

function Dropdown({ children = [], callback }) {
	const [opened, setOpened] = React.useState(false);
	const [selected, setSelected] = React.useState(0);

	return (
		<div className="DropdownContainer">
			<div className="Selected" onClick={() => setOpened(!opened)}>
				<div className="SelectedText">{children[selected] || "SELECT"}</div>
			</div>

			{opened && (
				<div className="Dropdown">
					{children.map((child, index) => (
						<div
							key={index}
							className="DropdownItem"
							onClick={() => {
								setSelected(index);
								setOpened(false);

								callback?.(child, index);
							}}
						>{child}</div>
					))}
				</div>
			)}
		</div>
	);
}

export default function ContactPage() {
	const [contactReason, setContactReason] = React.useState("Job Inquiries");
	const [subject, setSubject] = React.useState("");
	const [body, setBody] = React.useState("");

	return (
		<div className="ContactPage">
			<Header />

			<div className="Contents">
				<Window title="Telegram">
					You can find me on Telegram at <a href="https://telegram.me/RIVAEROS">telegram.me/RIVAEROS</a>.
				</Window>

				<Window title="Discord">
					You can join my Discord server with invite link <a href="https://discord.gg/Dfb96RJst6">Dfb96RJst6</a>, or copy my Discord username <a href="#" onClick={() => copyToClipboard("rivaeros")}>rivaeros</a>.
				</Window>
			</div>
		</div>
	);
}