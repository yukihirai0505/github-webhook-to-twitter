import moment from 'moment'
import twitter from 'twitter'

const {
  TWITTER_CONSUMER_KEY,
  TWITTER_SECRET,
  TWITTER_ACCESS_TOKEN,
  TWITTER_USER_SECRET,
} = process.env

module.exports = async (req, res) => {
  const client = new twitter({
    consumer_key: TWITTER_CONSUMER_KEY,
    consumer_secret: TWITTER_SECRET,
    access_token_key: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_USER_SECRET,
  })

  // const response = await client.post('statuses/update', {
  //   status: 'テスト',
  // })
  // console.log(response)
  const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a')
  console.info(TWITTER_CONSUMER_KEY)
  console.info(TWITTER_SECRET)
  console.info(TWITTER_ACCESS_TOKEN)
  console.info(TWITTER_USER_SECRET)
  res.end(currentTime)
}
