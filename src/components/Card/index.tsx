import blur from '../../assets/blur.jpeg'

import { LazyLoadImage } from "react-lazy-load-image-component";
import { cva, type VariantProps } from "class-variance-authority";

import styles from './styles.module.css'


const card = cva(styles.card, {
  variants:{
    intent:{
      primary: styles.card_themePrimary
    }
  }
})

interface CardProps extends VariantProps<typeof card>  {
  cardMediaURL?: string | null;
  cardContent: React.ReactNode;
  cardAction?: JSX.Element;
  cardTop?: React.ReactNode
}


export const Card = ({ cardMediaURL, cardAction, cardContent, cardTop, intent = 'primary'}: CardProps)=> (
  <div className={card({intent})}>
    {
      cardTop && <div>
        {cardTop}
      </div>
    }

    <div className={styles.card__media}>
      {
        cardMediaURL && 
          <LazyLoadImage placeholderSrc={blur} width='18rem' height={300} src={cardMediaURL} alt='card media'/>
      }
    </div>

    {cardContent}

    {
      cardAction &&
        <div className={styles.card__cardAction}>
          {cardAction}
        </div>
    }

  </div>
)
