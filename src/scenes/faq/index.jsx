import { Box, useTheme, Typography } from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from "../../theme"

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const faqs = [
        {
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with rendering data to the DOM."
        },
        {
            question: "The Universe",
            answer: "The universe is vast and ever-expanding, filled with billions of galaxies, each containing millions or billions of stars. Understanding the universe involves exploring concepts such as dark matter, black holes, and the big bang. These celestial phenomena continue to intrigue scientists and astronomers, driving endless research and discoveries."
        },
        {
            question: "Artificial Intelligence",
            answer: "Artificial Intelligence (AI) is the simulation of human intelligence in machines. These machines are programmed to think like humans and mimic their actions. AI has applications in various fields including robotics, natural language processing, and machine learning. It is a rapidly growing field with potential to revolutionize industries."
        },
        {
            question: "Climate Change",
            answer: "Climate change refers to significant changes in global temperatures and weather patterns over time. While climate change is a natural phenomenon, scientific evidence shows that human activities, particularly fossil fuel consumption, have accelerated the process. Addressing climate change requires global cooperation and innovative solutions to reduce carbon emissions."
        },
        {
            question: "The Internet of Things (IoT)",
            answer: "The Internet of Things (IoT) is a network of physical objects embedded with sensors, software, and other technologies with the purpose of connecting and exchanging data with other devices and systems over the internet. IoT has the potential to transform industries, from manufacturing to healthcare, by enabling smarter decision-making and efficiency improvements."
        }
    ];


    return (
        <>
            <Header title="FAQ" subtitle="Frequently Asked Questions" />
            {faqs.map((qna) => {
                return (
                    <Box sx={{ borderRadius: "5px" }}>
                        <Accordion sx={{ backgroundColor: `${colors.primary[400]}`, margin: "3px 0 5px 0" }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h5" color={colors.grey[100]}>
                                    {qna.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {qna.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                )
            })}
        </>
    )
}

export default FAQ
