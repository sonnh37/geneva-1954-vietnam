// const bgColors = ['#DFF4D9', '#EBE8F2', '#FDE0C3', '#DFF3F7', '#F8F2DE', '#FEE1D3']

export interface TimelineItemType {
    text: string
    date: string
    category: {
      tag: string
      color?: string
      bgColor: string
    }
    link?: {
      url: string
      text: string
    }
  }
  
  const timelineData = [
    {
      text: '700.000 quân (20.000 quân Mỹ) Tây Nguyên, Đồng bằng khu V, Đông Nam Bộ - Tăng cường quân số, triển khai chiến lược "tìm diệt" với các cuộc hành quân quy mô lớn nhằm tiêu diệt lực lượng chủ lực của ta.',
      date: 'Mùa khô 1965 - 1966',
      category: {
        tag: 'project',
        bgColor: '#FEE1D3',
      },
      link: {
        url: '#',
        text: 'Check it out',
      },
    },
    {
      text: 'Phản công và tiến công: Quân Giải phóng miền Nam thực hiện chiến tranh du kích, đánh bại nhiều cuộc càn quét lớn của Mỹ.',
      date: 'Mùa khô 1965 - 1966',
      category: {
        tag: 'project',
        bgColor: '#EBE8F2',
      },
      link: {
        url: '#',
        text: 'Check it out',
      },
    },
    {
      text: 'Đẩy mạnh các chiến dịch quân sự 390.000 quân Mỹ, 50.000 chư hầu, 540.000 quân VNCH, 4.000 máy bay, 2.500 tăng giáp Từ Tây Nguyên đến Sài Gòn nhưng vẫn không tiêu diệt được lực lượng chủ lực của Quân Giải phóng.',
      date: 'Mùa khô 1966 - 1967',
      category: {
        tag: 'Office',
        bgColor: '#DFF4D9',
      },
    },
    {
      text: 'Tiếp tục chiến đấu bền bỉ, gây thiệt hại lớn cho quân Mỹ, phát triển thế trận chiến tranh nhân dân với 4 bám Cấp trên bám cấp dưới Đảng bám dân Dân bám đất Bộ đội, du kích bám địch; 3 mũi giáp công, Quân sự, Chính trị, Binh vận',
      date: 'Mùa khô 1966 - 1967',
      category: {
        tag: 'award',
        bgColor: '#FFFAD1',
      },
      link: {
        url: 'https://dev.to/abdulbasit313',
        text: 'Profile link',
      },
    },
    {
      text: 'Do sức ép của chiến tranh và dư luận phản đối chiến tranh ở Mỹ, Mỹ buộc phải chấp nhận đàm phán với Mặt trận Dân tộc Giải phóng miền Nam tại Paris (Pháp).',
      date: '1968 - Hội nghị Paris',
      category: {
        tag: 'job',
        bgColor: '#FEE1D3',
      },
      link: {
        url: '#',
        text: 'Check it out',
      },
    },
    {
      text: 'Từ ngày 30/1/1968, Mặt trận Dân tộc Giải phóng miền Nam mở Tổng tiến công và nổi dậy Tết Mậu Thân. Hàng loạt đô thị miền Nam bị tiến công, trong đó có cả Sài Gòn và Tòa Đại sứ Mỹ. Chiến dịch làm lung lay ý chí xâm lược của Mỹ, làm rúng động chính trường Mỹ.',
      date: '1968 - Tổng tiến công và nổi dậy Tết Mậu Thân',
      category: {
        tag: 'certification',
        bgColor: '#DFF4D9',
      },
      link: {
        url: 'https://www.freecodecamp.org/certification/basit_miyanji/responsive-web-design',
        text: 'Check it out here',
      },
    },
  ]
  
  export { timelineData }