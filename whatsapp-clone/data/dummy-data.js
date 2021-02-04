import Chat from "../models/chat";
import Status from "../models/status";
import Call from "../models/calls";

export const CHATS = [
  new Chat(
    "c1",
    "David",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFVOvnLuFmMy4tG302e54L8S8v-vNuqAywzA&usqp=CAU",
    "Hi mate",
    "7:30 AM"
  ),
  new Chat(
    "c2",
    "Chopper",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTT6Rb2npE145Heh841aoR7uZxwXyMuV8WQMw&usqp=CAU",
    "yeah I know that stuff",
    "8:00 PM"
  ),
  new Chat(
    "c3",
    "Tommy",
    "https://i.pinimg.com/originals/9e/11/ee/9e11eeb32cd8bb9021a420c1a36c84eb.jpg",
    "Sometimes its the wisky that does the talking!",
    "1:30 PM"
  ),
  new Chat(
    "c4",
    "Poly",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXK2NE1dRH47AdvCrWyygJBvRRL5QPRdexNw&usqp=CAU",
    "got it",
    "2:00 PM"
  ),
  new Chat(
    "c5",
    "Ada",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfLnK0REwOc3Xug5iPN7dIm6qzNQ1NlrumPw&usqp=CAU",
    "Actually i was thinking to go over there.",
    "4:02 AM"
  ),
  new Chat(
    "c6",
    "Arthur 2",
    "https://static.wikia.nocookie.net/peaky-blinders/images/5/5a/Arthusr4.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140036",
    "We will see",
    "4:00 AM"
  ),
  new Chat(
    "c7",
    "Solomon",
    "https://i.pinimg.com/736x/7a/82/5a/7a825a70cf6ce43b42c99a0d23a173c0.jpg",
    "Alright",
    "12:00 AM"
  ),
  new Chat(
    "c8",
    "Sabini",
    "https://static.wikia.nocookie.net/peaky-blinders/images/b/b4/Darby_sabini.png/revision/latest/top-crop/width/220/height/220?cb=20141018014605",
    "great bud",
    "11:00 AM"
  ),
  new Chat(
    "c9",
    "Jhonson",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyC4srZtkBoBDu3aHQOKdQgUgVUBXpdu-OLw&usqp=CAU",
    "Say hi bou hi!",
    "9:00 PM"
  ),
  new Chat(
    "c10",
    "Maria",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmG3AmzI-MwlqWDNE1uOsCMex_n46ha8L81A&usqp=CAU",
    "Hmm",
    "11:00 PM"
  ),
  new Chat(
    "c11",
    "Linda",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "K",
    "10:00 PM"
  ),
];

export const STATUSES = [
  new Status(
    "s1",
    "https://toolbox.iskysoft.com/images/topic/best-funny-cool-cute-whatsapp-status-messages-1.jpg",
    "David",
    "Today, 5:30 PM"
  ),
  new Status(
    "s2",
    "https://i.pinimg.com/originals/fc/cc/e2/fccce2e926fdec1e648e2f04b98a8bf1.png",
    "Maria",
    "43 minutes ago"
  ),
  new Status(
    "s3",
    "https://ahseeit.com/tamil/king-include/uploads/2019/04/thumb_fb_img_1555491909967-3690698090.jpg",
    "Linda",
    "Today, 7:30 PM"
  ),
  new Status(
    "s4",
    "https://toolbox.iskysoft.com/images/topic/best-funny-cool-cute-whatsapp-status-messages-12.jpg",
    "Tommy",
    "10 minutes ago"
  ),
  new Status(
    "s5",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuok-3O7XS2J7ZnjDJdeoLxCiafqhYJAAwfg&usqp=CAU",
    "Arthur",
    "Today, 6:00 PM"
  ),
  new Status(
    "s6",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRuain6yi7oKAlXXG3vJDJFlVH0MEuECGl8A&usqp=CAU",
    "Solomon",
    "Today, 7:30 PM"
  ),
  new Status(
    "s7",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQypkhRKrX7Ap5YCvmjbFyQ9UMkQ72VGGbMw&usqp=CAU",
    "Chopper",
    "20 minutes ago"
  ),
];

export const CALLS = [
  new Call(
    "ca1",
    "Linda",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "(2) November 16, 10:00 PM"
  ),
  new Call(
    "ca2",
    "Solomon",
    "https://i.pinimg.com/736x/7a/82/5a/7a825a70cf6ce43b42c99a0d23a173c0.jpg",
    "Today, 7:30 PM"
  ),
  new Call(
    "ca3",
    "Tommy",
    "https://i.pinimg.com/originals/9e/11/ee/9e11eeb32cd8bb9021a420c1a36c84eb.jpg",
    "10 minutes ago"
  ),
  new Call(
    "ca4",
    "Arthur",
    "https://static.wikia.nocookie.net/peaky-blinders/images/5/5a/Arthusr4.jpg/revision/latest/top-crop/width/360/height/360?cb=20190715140036",
    "Nov 12, 7:30 PM"
  ),
  new Call(
    "ca5",
    "Maria",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmG3AmzI-MwlqWDNE1uOsCMex_n46ha8L81A&usqp=CAU",
    "43 minutes ago"
  ),
  new Call(
    "ca6",
    "David",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFVOvnLuFmMy4tG302e54L8S8v-vNuqAywzA&usqp=CAU",
    "Today, 5:30 PM"
  ),
  new Call(
    "ca7",
    "Poly",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXK2NE1dRH47AdvCrWyygJBvRRL5QPRdexNw&usqp=CAU",
    "(3) October 31, 5:30 PM"
  ),
];
