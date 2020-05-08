import React, { useState, useMemo } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global.css'

const IndexPage = () => {

  const [pessimistic, setPessimistic] = useState(0);
  const [optimistic, setOptimistic] = useState(0);
  const [probable, setProbable] = useState(0);

  const pert = useMemo(() => {
    const pertValue = (pessimistic + 4 * probable + optimistic) / 6;
    return pertValue.toFixed(2);
  }, [pessimistic, optimistic, probable]);

  return (
    <Layout>
      <SEO title="Home" />

      <section>
        <div className="container">

          <div className="estimate-container">

            <div className="estimate o">
              <input
                type="number"
                value={optimistic}
                onChange={(e) => { setOptimistic(Number(e.target.value)) }}
              />
              <label htmlFor="">Otimista</label>
            </div>

            <div className="estimate mp">
              <input
                type="number"
                value={probable}
                onChange={(e) => { setProbable(Number(e.target.value)) }}
              />
              <label htmlFor="">Mais Provável</label>
            </div>

            <div className="estimate p">
              <input
                type="number"
                value={pessimistic}
                onChange={(e) => { setPessimistic(Number(e.target.value)) }}
              />
              <label htmlFor="">Pessimista</label>
            </div>

          </div>

          <p className="pert-value">{pert}h</p>
        </div>
      </section>

    </Layout>
  )
}

export default IndexPage
