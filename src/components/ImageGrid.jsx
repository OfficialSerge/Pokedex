import { useFirestore } from "../hooks/useFirestore"
import { motion } from 'framer-motion'

export const ImageGrid = ({ setSelectPok }) => {
  const { docs } = useFirestore('Pokedex')
  
  return (
    <div className="img-grid" >
      {docs && docs.map((doc) =>
      (<motion.img className="grid-img" src={doc.url} key={doc.id} alt="uploaded Pic"
        onClick={() => setSelectPok(doc)} layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />)
      )}
    </div>
  )
}