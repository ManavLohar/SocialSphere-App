import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={.8} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={6} sx={{ justifyContent: "left" }}>
          <Avatar
            alt="Remy Sharp"
            src="https://passport-photo.online/images/cms/prepare_light_b364e3ec37.webp?quality=80&format=webp&width=1920"
          />
          <Avatar
            alt="Travis Howard"
            src="https://www.sukhothai.in/wp-content/uploads/2016/07/male-passport-size-2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://www.topmediai.com/micro/passport-photo-maker/assets/bigger_pic4-843adaaa.png"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://lawschoolpolicyreview.com/wp-content/uploads/2018/06/passport-size-photo-2-e1558013566564.jpg?w=596"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-change.jpg"
          />
          <Avatar
            alt="Travis Doe"
            src="https://pbs.twimg.com/media/EjY_lxhUcAAqCde.jpg:large"
          />
          <Avatar
            alt="Mark Herp"
            src="https://www.paraglidingassociationofindia.org/wp-content/uploads/2022/02/passport-size.png"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=pexels-juanpphotoandvideo-1246437.jpg&fm=jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://media.istockphoto.com/id/1257465150/photo/pumpkin-pasta-with-mushroom-and-hazelnuts.jpg?s=612x612&w=0&k=20&c=rozWFmBqj7qHIdLpe8cAuHji-KHmXFQfPcXS6svXSic="
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://lh6.googleusercontent.com/eO2uLjB8aqMskNkAez02U9LiQkMoIYSU_FCzLIcuykh9nqlkwlyquEUY4MEPT_5yNddgsov8sVTLafrGPm19ffhhDHCuNUSW8T4h7CqwR_LhA2ED1FCTwBw_na-WL6BpFLkZpytBRx789sLzbdXRlgQ"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://bizimages.withfloats.com/actual/64e38a7bbd7e06000130503c.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
