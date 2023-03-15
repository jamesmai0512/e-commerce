import styles from './Success.module.css'

const Success = () => {
  const { text_card, card } = styles
  return (
    <div className={card}>
      <i className="fa fa_check_circle text_success fa_5x"></i>

      <p className={text_card}>Congrats!</p>
      <p className={text_card}>Loan application started</p>
      <br />
      <h5>
        <p>
          You have been assigned<b>"Steve Jobs"</b>
        </p>
      </h5>
    </div>
  )
}

export default Success
