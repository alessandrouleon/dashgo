import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false }
) 

export default function DashBoard() {

    const options: ApexOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            foreColor: theme.colors.gray[500],
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: theme.colors.gray[600]
            },
            axisTicks: {
                color: theme.colors.gray[600]
            },
            categories: [
                '2022-01-10T00:00:00.00Z',
                '2022-01-11T00:00:00.00Z',
                '2022-01-12T00:00:00.00Z',
                '2022-01-13T00:00:00.00Z',
                '2022-01-14T00:00:00.00Z',
                '2022-01-15T00:00:00.00Z',
                '2022-01-16T00:00:00.00Z',
            ],
        },
        fill: {
            opacity: 0.3,
            type: 'gradient',
            gradient: {
                shade: 'dark',
                opacityFrom: 0.7,
                opacityTo: 0.3,
            }
        }

    };

    const series = [
        { name: 'serial 1', data: [31, 120, 10, 28, 63, 17, 108] }
    ]


    return (
        <Flex direction='column' h='100vh' >
            <Header />

            <Flex width='100%' my='6' maxWidth={1480} mx='auto' px='6' >
                <Sidebar />

                <SimpleGrid flex={1} gap={4} minChildWidth='320px' alignItems='flex-start'>
                    <Box p={['6', '8']} bg='gray.800' borderRadius={8}
                    pb='4'
                    >
                        <Text fontSize='lg' mb={4}>Inscritos da semana</Text>
                        <Chart options={options} series={series} type='area' width='100%' height={168} />
                    </Box>

                    <Box  p={['6', '8']} bg='gray.800' borderRadius={8}
                    pb='4'
                    >
                        <Text fontSize='lg' mb={4}>Taxa de abertura</Text>
                        <Chart options={options} series={series} type='area' width='100%' height={168} />
                    </Box>

                </SimpleGrid>
            </Flex>

        </Flex>

    )
}