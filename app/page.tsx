import {
  RiAlertLine,
  RiDropLine,
  RiHeartLine,
  RiHomeSmileLine,
  RiMailLine,
  RiPhoneLine,
} from '@remixicon/react';
import * as Button from './components/button';
import * as Chip from './components/chip';
import * as Contact from './components/contact';
import * as Feature from './components/feature';
import * as Footer from './components/footer';
import * as Form from './components/form';
import { Jumbotron } from './components/jumbotron';
import * as Navbar from './components/navbar';
import * as Pricing from './components/pricing';
import * as Section from './components/section';
import * as Testimonial from './components/testimonial';

export default function Index() {
  return (
    <>
      <Navbar.Root>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>About</Navbar.Item>
        <Navbar.Item>Products</Navbar.Item>
        <Navbar.Item>Contact</Navbar.Item>
      </Navbar.Root>

      <Jumbotron />

      <Section.Root>
        <Section.Label color="lime">Learn more</Section.Label>
        <Section.Title>About Drimaster</Section.Title>
        <Section.Description>
          Improve your home&apos;s air quality with The Drimaster. This advanced system draws in
          fresh, filtered outdoor air via your roof space, preventing damp and condensation for a
          cleaner, healthier environment.
        </Section.Description>
      </Section.Root>

      <Feature.List>
        <Feature.Card
          icon={<RiDropLine />}
          title="Condensation & Mould"
          description="Is your home plagued by condensation, mold, dampness, musty odors, fogged windows, damaged decor, or poor air quality? The solution is here: the Drimaster Clean Air Ventilation Unit!"
        />
        <Feature.Card
          icon={<RiHomeSmileLine />}
          title="Building Regulations"
          description="BBA regulations require effective home ventilation. The Drimaster System meets all British Board of Agrément standards, eliminating the need for unsightly window trickle vents. Plus, we're CIS registered!"
        />
        <Feature.Card
          icon={<RiHeartLine />}
          title="Health Benefits"
          description="Airborne allergens from dust mites often trigger asthma. The Drimaster unit provides gentle background ventilation to reduce these allergens and can be directly enhanced for optimal relief in the asthmatic's bedroom."
        />
        <Feature.Card
          icon={<RiAlertLine />}
          title="Reduce Radon Levels"
          description="Radon is a naturally occurring gas from the radioactive decay of underground uranium and is the second leading cause of lung cancer, responsible for up to 60 deaths annually in Northern Ireland. A Drimaster unit can reduce radon levels by up to 90%!"
        />
      </Feature.List>

      <Testimonial.Root>
        <Testimonial.Card
          avatar="./avatar-1.png"
          name="Mandy Moore"
          location="Glengormley"
          quote="Drimaster is Brilliant! All condensation gone the next day, couldn't believe it! Wish I had done it years ago!"
        />
        <Testimonial.Card
          avatar="./avatar-2.png"
          name="David Black"
          location="Belfast"
          quote="My Drimaster has been fitted less than 24 hours and condensation has completely cleared up. Cannot recommend Hunter Home Ventilation enough."
        />
      </Testimonial.Root>

      <div className="bg-secondary-hover pb-20">
        <Section.Root>
          <Section.Label color="purple">Pricing</Section.Label>
          <Section.Title>Available products</Section.Title>
          <Section.Description>
            A range of Drimaster products are available to meet your specific needs.
          </Section.Description>
        </Section.Root>

        <Pricing.Root>
          <Pricing.Card
            product="Dri-ECO Loft Control"
            description="Drimaster with speed controls in the loft."
            price={700}
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>5 Year Warranty</Pricing.Feature>
            <Pricing.Feature>System Controls on Unit</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>

          <Pricing.Card
            product="Dri-ECO Hall Control"
            description="Drimaster with speed controls in the hall."
            price={750}
            prominent
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>Optional 7 Year Warranty*</Pricing.Feature>
            <Pricing.Feature>Controlled from hallway</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>

          <Pricing.Card
            product="Dri-HEAT Hall Control"
            description="Drimaster with heating and speed controls in the hall."
            price={800}
          >
            <Pricing.Feature>BBA Certificated</Pricing.Feature>
            <Pricing.Feature>Optional 7 Year Warranty*</Pricing.Feature>
            <Pricing.Feature>Controlled from hallway</Pricing.Feature>
            <Pricing.Feature>Remote heat control sensors available</Pricing.Feature>
            <Pricing.Feature>1p a day running cost</Pricing.Feature>
            <Pricing.Feature>Price includes installation</Pricing.Feature>
          </Pricing.Card>
        </Pricing.Root>
      </div>

      <div className="container mx-auto flex min-h-[332px] flex-col gap-x-20 gap-y-16 bg-white px-8 py-20 lg:flex-row">
        <Contact.Root>
          <Contact.Label color="lime">Got Questions?</Contact.Label>
          <Contact.Title>Contact us</Contact.Title>
          <Contact.Description>
            We&apos;d love to hear from you! Request a free, no-obligation survey, and we&apos;ll
            help find the perfect solution for your home. For filter changes, repairs, or any
            general inquiries, just fill out the form.
            <br />
            <br />
            Our installation services cover Antrim, Down, and Armagh, with supply-only options
            available across Northern Ireland.
          </Contact.Description>

          <div className="flex flex-wrap gap-2 pt-4">
            <Chip.Root href="mailto:glenn.hunter@live.co.uk">
              <Chip.Icon icon={<RiMailLine />} />
              glenn.hunter@live.co.uk
            </Chip.Root>

            <Chip.Root href="tel:07828086900">
              <Chip.Icon icon={<RiPhoneLine />} />
              078 2808 6900
            </Chip.Root>
          </div>
        </Contact.Root>

        <Form.Root>
          <Form.Field>
            <Form.Label isRequired>Name</Form.Label>
            <Form.Input type="text" placeholder="John Smith" />
          </Form.Field>

          <Form.Field>
            <Form.Label>Email address</Form.Label>
            <Form.Input type="email" placeholder="johnsmith@email.com" />
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired>Phone number</Form.Label>
            <Form.Input type="tel" placeholder="078 2808 6900" />
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired>Location</Form.Label>
            <Form.Input type="text" placeholder="Belfast" />
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired>Type</Form.Label>
            <Form.Select>
              <option value="survey">Survey request</option>
              <option value="filter">Filter change</option>
              <option value="repair">Repair</option>
              <option value="enquiry">Enquiry</option>
            </Form.Select>
          </Form.Field>

          <Form.Field>
            <Form.Label isRequired>Message</Form.Label>
            <Form.Textarea placeholder="How can we help you?" />
          </Form.Field>

          <div className="flex justify-end">
            <Button.Root variant="primary">Submit</Button.Root>
          </div>
        </Form.Root>
      </div>

      <Footer.Root />
    </>
  );
}
