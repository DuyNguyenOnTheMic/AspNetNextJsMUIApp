// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [32, 41, 41, 70]

const CardStatisticsGeneratedLeads = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    colors: [
      theme.palette.success.main,
      hexToRGBA(theme.palette.success.main, 0.7),
      hexToRGBA(theme.palette.success.main, 0.5),
      hexToRGBA(theme.palette.success.main, 0.16)
    ],
    stroke: { width: 0 },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    labels: ['Electronic', 'Sports', 'Decor', 'Fashion'],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      padding: {
        top: -22,
        bottom: -18
      }
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnClick: false,
        donut: {
          size: '73%',
          labels: {
            show: true,
            name: {
              offsetY: 25,
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily
            },
            value: {
              offsetY: -15,
              fontWeight: 500,
              formatter: val => `${val}`,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h2.fontSize as string
            },
            total: {
              show: true,
              label: 'Total',
              color: theme.palette.text.secondary,
              fontFamily: theme.typography.fontFamily,
              fontSize: theme.typography.h5.fontSize as string
            }
          }
        }
      }
    }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'stretch', justifyContent: 'space-between' }}>
          <Box sx={{ gap: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Typography variant='h5' sx={{ mb: 0.75 }}>
                Generated Leads
              </Typography>
              <Typography variant='body2'>Monthly Report</Typography>
            </div>
            <div>
              <Typography variant='h3' sx={{ mb: 0.75 }}>
                4,350
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { mr: 1, color: 'success.main' } }}>
                <Icon icon='tabler:chevron-up' fontSize='1.25rem' />
                <Typography variant='h6' sx={{ color: 'success.main' }}>
                  15.8%
                </Typography>
              </Box>
            </div>
          </Box>
          <ReactApexcharts type='donut' width={150} height={175} series={series} options={options} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsGeneratedLeads
