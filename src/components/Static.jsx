import React from "react";
import {
  Typography,
  Button,
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
} from "@mui/material";

export default function App() {
  const usersCount = "24,318";
  const since = "3 yil 2 oy";
  const testimonials = [
    {
      name: "Aliaka",
      text: "Bu saytda juda ham zo'r kinolar mavjud. Boshqalarga ham maslahat beraman!",
      avatar: "A",
    },
    {
      name: "Mariya",
      text: "Bu saytni topganimdan so'ng boshqa joydan kino ko'rmay qo'ydim.",
      avatar: "M",
    },
    {
      name: "Bekzod",
      text: "Har xil turdagi kinolar va juda qiziq kinolar va fantastik kinolar bor ekan.",
      avatar: "B",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 5, md: 8 },
          px: { xs: 2, md: 0 },
          bgcolor: "#f5f5f5",
        }}
      >
        <Typography variant="h4" sx={{ mb: 1, fontSize: { xs: "28px", md: "40px" } }}>
          Kinolar olamiga xush kelibsiz
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: { xs: "14px", md: "16px" },
            px: { xs: 2, md: 20 },
          }}
        >
          Bu yerda faqat qo'rqinchli va fantastik kinolar ko'rishingiz mumkin.
        </Typography>

        <Button
          variant="contained"   
          sx={{
            bgcolor: "yellow",
            width: { xs: "130px", md: "150px" },
            height: "40px",
            borderRadius: 5,
          }}
        >
          Explore
        </Button>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
        >
          <Grid item xs={12} sm={10} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Kinoni tomosha qilganlar
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {usersCount}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Kino ko'ruvchilar soni
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={10} md={6}>
            <Card elevation={3}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="subtitle2" color="text.secondary">
                  Kinoning faoliyat muddati
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  {since}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Shu vaqtdan beri kino ko'rilgan
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ py: 4, pb: 8 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            fontSize: { xs: "22px", md: "28px" },
          }}
        >
          Kinolar haqida fikrlar
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {testimonials.map((t, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ height: "100%" }}>
                <CardContent>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 1 }}
                  >
                    <Avatar sx={{ width: 45, height: 45 }}>{t.avatar}</Avatar>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Foydalanuvchi
                      </Typography>
                    </Box>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {t.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
