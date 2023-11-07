import jerry from "../assets/jerry.png";
import { AnchoredImage } from "../components/AnchoredImage";
import { PageHeader } from "../components/PageHeader";
import { ParagraphItem } from "../components/ParagraphItem";
import { Content } from "../containers/Content";
import styles from "./pages.module.scss";
export const Profile = () => {
  return (
    <div className={styles.pages}>
      <Content
        components={[
          <PageHeader text="Jerry Pallath / Software Engineer" />,
          <ParagraphItem
            text={`Candy sesame snaps marzipan fruitcake cotton candy chupa chups biscuit
marzipan croissant. Tootsie roll icing pastry fruitcake ice cream bear
claw dessert fruitcake biscuit. Candy canes pudding brownie marzipan
topping wafer apple pie dragée. Gummies caramels candy topping bonbon
chocolate bar sweet liquorice. Bear claw pie wafer candy canes ice cream
bonbon candy pie cheesecake. Tart jelly candy canes chupa chups
chocolate jelly-o candy canes oat cake jelly beans. Chocolate pudding
chocolate bar chupa chups biscuit cake liquorice gingerbread candy
canes. Croissant tootsie roll halvah cake cheesecake sweet roll chupa
chups bear claw dessert. Carrot cake oat cake danish jelly topping ice
cream powder danish.`}
          />,
          <ParagraphItem
            text={`Caramels marzipan gummi bears marshmallow candy canes powder cotton
candy. Gummies marshmallow tootsie roll croissant macaroon sweet roll
jelly halvah apple pie. Shortbread cupcake dessert croissant sweet pie
wafer. Gummies croissant pie caramels sugar plum pie jujubes bonbon. Oat
cake gingerbread jelly beans danish sweet roll liquorice cotton candy
fruitcake brownie. Dragée tootsie roll pastry gummi bears gummies
halvah.`}
          />,
          <p>experience yada yada</p>,
          <div>modal for resume</div>,
        ]}
      />
      <AnchoredImage image={jerry} />
    </div>
  );
};

// ,
// (<p>experience yada yada</p>),
// (<div>modal for resume</div>)),
