import React from 'react';
import { View, ScrollView } from '@tarojs/components';
import './index.scss';
import Feed from '../../components/feed/feed';
import img4 from '../../asset/images/icon1.jpeg';
import img5 from '../../asset/images/icon8.jpg';
import img6 from '../../asset/images/icon9.jpeg';

export default class Index extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			loading: true,
			list: [
				{
					question_id: 1,
					answer_id: 3,
					feed_source_id: 23,
					feed_source_name: 'Rebecca1',
					feed_source_txt: '赞了回答1',
					feed_source_img: img4,
					question: '选择 Kindle 而不是纸质书的原因是什么？',
					answer_ctnt:
						'难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 2,
					answer_id: 25,
					feed_source_id: 24,
					feed_source_name: 'Alex2',
					feed_source_txt: '回答了问题2',
					feed_source_img: img5,
					question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
					answer_ctnt:
						'不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 3,
					answer_id: 61,
					feed_source_id: 25,
					feed_source_name: 'George3',
					feed_source_txt: '赞了回答3',
					feed_source_img: img6,
					question: '气象铁塔的辐射大吗？',
					answer_ctnt:
						'我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 4,
					answer_id: 3,
					feed_source_id: 23,
					feed_source_name: 'Rebecca4',
					feed_source_txt: '赞了回答4',
					feed_source_img: img4,
					question: '选择 Kindle 而不是纸质书的原因是什么？',
					answer_ctnt:
						'难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 5,
					answer_id: 25,
					feed_source_id: 24,
					feed_source_name: 'Alex5',
					feed_source_txt: '回答了问题5',
					feed_source_img: img5,
					question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
					answer_ctnt:
						'不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 6,
					answer_id: 61,
					feed_source_id: 25,
					feed_source_name: 'George6',
					feed_source_txt: '赞了回答6',
					feed_source_img: img6,
					question: '气象铁塔的辐射大吗？',
					answer_ctnt:
						'我不知道那个铁塔的情况，不过气象铁塔上会有一些测太阳辐射的设备，如果说辐射的话，太阳辐射那么多，大家赶紧躲进地底下呀~~~~~要不然辐射量这么大，会变异的呀~~~~',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 7,
					answer_id: 3,
					feed_source_id: 23,
					feed_source_name: 'Rebecca7',
					feed_source_txt: '赞了回答7',
					feed_source_img: img4,
					question: '选择 Kindle 而不是纸质书的原因是什么？',
					answer_ctnt:
						'难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...',
					good_num: '112',
					comment_num: '18',
				},
				{
					question_id: 8,
					answer_id: 25,
					feed_source_id: 24,
					feed_source_name: 'Alex8',
					feed_source_txt: '回答了问题8',
					feed_source_img: img5,
					question: '如何评价周杰伦的「中文歌才是最屌的」的言论？',
					answer_ctnt:
						'不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...',
					good_num: '112',
					comment_num: '18',
				},
			],
		};
	}
	render() {
		const { list } = this.state;
		return (
			<View>
				<View className="search flex-wrp">你可能感兴趣的</View>
				<ScrollView
					className="container"
					scrollY
					scrollWithAnimation
					scrollTop={0}
					lowerThreshold={10}
					upperThreshold={10}
					style="height:300px"
				>
					{list.map((item, index) => {
						return (
							<Feed
								key={index}
								feedSourceImg={item.feed_source_img}
								feedSourceName={item.feed_source_name}
								feedSourceTxt={item.feed_source_txt}
								question={item.question}
								goodNum={item.good_num}
								commentNum={item.comment_num}
								answerCtnt={item.answer_ctnt}
							/>
						);
					})}
				</ScrollView>
			</View>
		);
	}
}
