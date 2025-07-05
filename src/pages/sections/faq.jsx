const Faq = () => {
  return (
    <div className="container my-5">
      <h2 className="text-white mb-4 text-center">
        Frequently Asked Questions
      </h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq1">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1">
              1. What is SkillMint?
            </button>
          </h2>
          <div
            id="collapse1"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              SkillMint is a Web3 learn-to-earn platform that rewards you for
              learning blockchain skills with crypto, NFTs, and XP.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq2">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2">
              2. How do I earn rewards?
            </button>
          </h2>
          <div
            id="collapse2"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You earn points or tokens by completing tasks like watching
              videos, exploring dApps, or referring users.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq3">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3">
              3. Do I need a crypto wallet to start?
            </button>
          </h2>
          <div
            id="collapse3"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              No, you can sign up using just your email. Wallets are optional
              and only needed to claim crypto/NFTs.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq4">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4">
              4. What kinds of tasks are available?
            </button>
          </h2>
          <div
            id="collapse4"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Tasks include: Watching Web3 tutorials,deploying smart contracts,
              subscribing to crypto communities,exploring dApps, answering
              quizzes,referring friends
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq5">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5">
              5. Whhat is the 4-hour reward button?
            </button>
          </h2>
          <div
            id="collapse5"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              It's a button you can click every 4 hours to earn free points -
              designed to keep you engaged and rewarded for returning.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq6">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse6">
              6. How do referrals work?
            </button>
          </h2>
          <div
            id="collapse6"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You get a referral link. When someone joins with it, you earn 10%
              of their earnings for the first 5 days.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq7">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse7">
              7. What can I do with my earned points or tokens?
            </button>
          </h2>
          <div
            id="collapse7"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              You can use them to unlock premium missions,redeem for crypto
              (with $SKILL), stake for bonus rewards, showcase certificates
              (NFTs)
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq8">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse8">
              8. Are SkillMint certificates real credentials?
            </button>
          </h2>
          <div
            id="collapse8"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes. SkillMint issues soulbound NFTs as proof of completion. These
              live on-chain and are tied to your identity forever.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq9">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse9">
              9. Is SkillMint free to use?
            </button>
          </h2>
          <div
            id="collapse9"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Yes, SkillMint is completely free to use. You earn while you learn
              — no hidden fees.
            </div>
          </div>
        </div>
        <div className="accordion-item bg-dark text-light border-0 mb-2">
          <h2 className="accordion-header" id="faq10">
            <button
              className="accordion-button collapsed bg-dark text-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse10">
              10. How do I start?
            </button>
          </h2>
          <div
            id="collapse10"
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion">
            <div className="accordion-body">
              Just click “Get Started”, enter your email, and begin completing
              tasks. You’ll earn points from day one.
            </div>
          </div>
        </div>

        {/* Add more FAQ items here similarly  */}
      </div>
    </div>
  );
};

export default Faq;
