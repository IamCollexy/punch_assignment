import React, { useState } from 'react';
import {
  Box,
  Card,
  Stack,
  Typography,
  IconButton,
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { screeningSteps } from '@/jsonData/rawData';
const HomeSection3 = () => {
  const theme = useTheme();
  const [expandedStep, setExpandedStep] = useState(null);

  const handleToggle = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <Box sx={{ backgroundColor: theme.palette.common.white, py: 12 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" fontWeight={700}>
          How we ensure you’re in good hands.
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ mt: 2 }}
        >
          With our comprehensive screening process, we hand-pick
          highly skilled candidates so you can onboard them in a
          matter of days.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 600, mx: 'auto' }}>
        <Stack spacing={2}>
          {screeningSteps.map((step, index) => (
            <Card
              key={index}
              elevation={expandedStep === index ? 4 : 1}
              sx={{
                p: 2,
                borderLeft:
                  expandedStep === index
                    ? `4px solid ${theme.palette.primary.main}`
                    : '4px solid transparent',
                bgcolor: expandedStep === index ? '#f9f9f9' : 'white',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton
                  size="small"
                  sx={{ mr: 2 }}
                  onClick={() => handleToggle(index)}
                >
                  {expandedStep === index ? (
                    <CheckBoxIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                  ) : (
                    <CheckBoxOutlineBlankIcon />
                  )}
                </IconButton>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {step.step}
                  </Typography>
                  {expandedStep === index && step.description && (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ mt: 1 }}
                    >
                      {step.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default HomeSection3;
