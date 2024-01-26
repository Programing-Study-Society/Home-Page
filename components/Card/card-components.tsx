"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface newsCardProps {
  title: string;
  details: string;
  date: string;
  imageUrl: string | undefined;
}

export function NewsCard({ title, details, date, imageUrl }: newsCardProps) {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 200 }}>
      <CardActionArea>
        {imageUrl ? (
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt={title + " image"}
          />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {details}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
