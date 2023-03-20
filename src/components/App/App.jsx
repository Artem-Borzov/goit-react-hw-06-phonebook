import AddContactForm from 'components/AddContactForm/AddContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { Container, Title } from './App.styled';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <Container>
      <AddContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactsList />
    </Container>
  );
};
