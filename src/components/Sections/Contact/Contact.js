import React from "react";
import ContactLink from "../../Common/ContactLink/ContactLink";
import classes from "./Contact.module.scss";
import { contactLinkProps } from "./ContactContent";
const Contact = () => {
  const contactLinks = contactLinkProps.map((link) => (
    <ContactLink
      key={link.title}
      title={link.title}
      subTitle={link.subTitle}
      href={link.href}
      icon={link.icon}
    ></ContactLink>
  ));
  return (
    <section className="section">
      <div className="section__content">
        <h2 className="heading-secondary">Contact Me</h2>
        <div className={classes.links}>{contactLinks}</div>
      </div>
</section>  );
};

export default Contact;
