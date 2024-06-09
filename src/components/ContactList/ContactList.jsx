import Contact from "../Contact/Contact"
import { useSelector } from "react-redux"
import { selectContacts } from "../../redux/contactsSlice"

const ContactList = () => {
	
	const contacts = useSelector(selectContacts)

    return (<ul>
		{contacts.map((contact) => {
			return <li key={contact.id}>
				<Contact data={contact} />
			</li>
		})
		}
</ul>)
}

export default ContactList