import ImagewithPreview from "@/commonComponents/ImagewithPreview";
import ImageSlider from "@/components/portfolio/SinglePortfolio/ImageSlider";
export const blogArr = [
  {
    Title: "CodeAI App UI Design",
    Slug: "codeai app ui design",
    Tags: ["UI Design", "App Design", "Graphic Design", "Prototype"],
    Category: "UI Design",
    Date: "24 Feb 2024",
    Thumb: "/images/portfolio/codeai/codeai.webp",
    MetaDesc:
      "My involvement in crafting the UI design and prototypes for the AI coding app began with immersing myself in understanding the client's requirements and vision. Through thorough research into industry best practices and user preferences, I laid the groundwork for our design approach.",
    Desc: (
      <div class="blogContent">
        <p>
          My involvement in crafting the UI design and prototypes for the AI
          coding app began with immersing myself in understanding the client's
          requirements and vision. Through thorough research into industry best
          practices and user preferences, I laid the groundwork for our design
          approach.
        </p>
        <h3>Let's embark on this coding adventure together!</h3>
        <p>
          Utilizing this knowledge, I embarked on the ideation phase, sketching
          concepts and developing wireframes to outline the app's structure and
          flow. Through iterative prototyping, I refined these concepts,
          focusing on intuitive navigation and clear user interactions.
        </p>
        <ImageSlider
          portfolioItem={[
            "/images/portfolio/codeai/codeai.webp",
            "/images/portfolio/codeai/codeai-img-1.webp",
          ]}
        />
        <h3>Throughout the design process,</h3>
        <p>
          I prioritized open communication and collaboration, seeking the
          client's feedback to ensure alignment with their expectations and
          objectives. Their input played a vital role in shaping the final
          designs, ensuring they met and exceeded their requirements.
        </p>
        <p>
          Once the UI designs and prototypes were finalized, I conducted
          rigorous testing to identify and address any usability issues. This
          iterative testing process allowed me to fine-tune the user experience,
          ensuring a seamless interface that enhances user engagement.
        </p>
        <ImagewithPreview
          height={480}
          src="/images/portfolio/codeai/codeai-img-1.webp"
          alt="CodeAI Mobile App UI"
        />
        <h3>In delivering the final UI designs and prototypes,</h3>
        <p>
          My goal was to provide the client with a visually compelling and
          highly functional solution that showcases the innovative capabilities
          of the AI coding app. I am confident that my designs will exceed their
          expectations, setting a new standard for excellence in UI design and
          prototyping for AI applications.
        </p>
      </div>
    ),
  },
];
