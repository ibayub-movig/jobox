import { Disclosure } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: "How does Jobox work?",
    answer: "Jobox extracts and organizes job opportunities from your newsletters and other job sources to create a personalized job board so you can manage, prioritize, and track your apps!"
  },
  {
    question: "Who is Jobox for?",
    answer: "Jobox works best for freelancers who use multiple newsletters to find curated job opportunities"
  },
  {
    question: "Do I have to connect my email?",
    answer: "Nope! If you just want to create your job board with public newsletters or alerts, it's not needed."
  },
  {
    question: "Is my email secure if I do connect it?",
    answer: "Yes, only emails from senders you select are sent, and none of your information is stored."
  },
  {
    question: "Is Jobox free to use?",
    answer: "We're onboarding people on a rolling basis for a free closed beta. The plan is to have a free and priced options in the future. Reach out at hello@ibrahimayub.com if you want to skip the line! :)"
  },
  {
    question: "Can I use Jobox if I'm not actively job searching?",
    answer: "Jobox is great for passive job seekers who want to stay aware of opportunities without actively searching. It helps you keep an eye on the job market effortlessly."
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function FAQ() {
  return (
    <div className="bg-white" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDown
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

