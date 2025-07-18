import React, {Component} from "react";
import {Divider} from 'antd';
import "./App.css";

class PublicationsPage extends Component {

    render() {
        return (
            <div className="Page">
                <h1>Publications</h1>

                <h2 className="publicationTitle"><a
                    href="https://www.biorxiv.org/content/10.1101/2025.05.17.654017v1"> SyntheMol-RL: a flexible reinforcement learning framework for designing novel and synthesizable antibiotics</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Gary Liu<sup>*</sup>, Denise Catacutan<sup>*</sup>, Stewart McLellan, Autumn Arnold, Megan M. Tu, Eric D. Brown, James Zou, and Jonathan M. Stokes.</p>
                <p className="journalText"><span className="journalName">bioRxiv</span>, 2025.
                </p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/swansonk14/SyntheMol">https://github.com/swansonk14/SyntheMol</a>
                    </p>
                    <p>Data & Models: <a
                        href="https://zenodo.org/records/15391268">https://zenodo.org/records/15391268</a>
                    </p>

                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.biorxiv.org/content/10.1101/2025.05.19.654988v1"> RL-Finetuning of OpenAI o1-mini to Enhance Biomedical Reasoning</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Yiqun T. Chen<sup>*</sup>,
                    Aaron Jaech, and James Zou.</p>
                <p className="journalText"><span className="journalName">Proceedings of Machine Learning Research</span>, 2025.
                </p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code & Data: <a
                        href="https://github.com/swansonk14/biomedical_o1">https://github.com/swansonk14/biomedical_o1</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.124.070413"> ADMET-AI Enables Interpretable Predictions of Drug-Induced Cardiotoxicity</a></h2>
                <p className="authorsText">Souhrid Mukherjee<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Parker Walther, Rabindra V. Shivnaraine, Jeremy Leitz, Paul D. Pang, James Zou, and Joseph C. Wu.
                </p>
                <p className="journalText"><span className="journalName">Circulation</span>, 2025.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.biorxiv.org/content/10.1101/2024.11.11.623004v1"> The Virtual Lab: AI Agents
                    Design New SARS-CoV-2 Nanobodies with Experimental Validation</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Wesley Wu, Nash
                    L. Bulaong, John E. Pak, and James Zou.
                </p>
                <p className="journalText"><span className="journalName">bioRxiv</span>, 2024.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/zou-group/virtual-lab">https://github.com/zou-group/virtual-lab</a>
                    </p>
                    <h4>News</h4>
                    <p><a href="https://www.nature.com/articles/d41586-024-01684-3">Virtual lab powered by 'AI
                        scientists' super-charges biomedical research</a>, Nature News.</p>
                    <p><a href="https://www.nature.com/articles/d41586-025-02028-5">AI 'scientists' joined these research teams: here’s what happened</a>, Nature News.</p>
                    <p><a href="https://indiaai.gov.in/article/stanford-researchers-create-virtual-lab-with-ai-scientists-to-automate-scientific-discovery">Stanford Researchers Create Virtual Lab with AI Scientists to Automate Scientific Discovery</a>, IndiaAI.</p>
                    <p><a href="https://analyticsindiamag.com/ai-insights-analysis/ai-scientists-are-here">AI Scientists
                        Are Here</a>, Analytics India Magazine.</p>
                    <p><a href="https://www.freethink.com/artificial-intelligence/virtual-lab-interdisciplinary-research">Inside the "Virtual Lab" where AIs and humans collaborate</a>, Freethink.</p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://openreview.net/forum?id=Vb1vVr75JT"> UniTox: Leveraging LLMs to Curate a Unified
                    Dataset of Drug-Induced Toxicity from FDA Labels</a></h2>
                <p className="authorsText">Jake Silberg, <span className="selfAuthor">Kyle Swanson</span>, Elana Simon,
                    Angela Zhang, Zaniar Ghazizadeh, Scott Ogden, Hisham Hamadeh, and James Zou.</p>
                <p className="journalText"><span className="journalName">NeurIPS Datasets and Benchmarks</span>, 2024.
                </p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/jsilbergDS/UniTox">https://github.com/jsilbergDS/UniTox</a>
                    </p>
                    <p>Data: <a
                        href="https://zenodo.org/records/14042913">https://zenodo.org/records/14042913</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.annualreviews.org/content/journals/10.1146/annurev-pharmtox-022724-095035"> Next-Gen
                    Therapeutics: Pioneering Drug Discovery with iPSCs, Genomics, AI, and Clinical Trials in a Dish</a>
                </h2>
                <p className="authorsText">Zehra Yildirim, <span className="selfAuthor">Kyle Swanson</span>, Xuekun Wu,
                    James Zou, and Joseph C. Wu.
                </p>
                <p className="journalText"><span
                    className="journalName">Annual Review of Pharmocology and Toxicology</span>, 2024.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehae519/7756511?utm_source=authortollfreelink&utm_campaign=eurheartj&utm_medium=email&guestAccessKey=d8ce1cae-1734-4675-915c-81835fd06563"> Clinical
                    trials in-a-dish for cardiovascular medicine</a></h2>
                <p className="authorsText">Xuekun Wu, <span
                    className="selfAuthor">Kyle Swanson</span>, Zehra Yildirim, Wenqiang Liu, Ronglih Liao, and Joseph
                    C.
                    Wu.
                </p>
                <p className="journalText"><span className="journalName">European Heart Journal</span>, 2024.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.nature.com/articles/s41592-024-02354-y"> Language models for biological research:
                    a primer</a></h2>
                <p className="authorsText">Elana Simon<sup>*</sup>, <span
                    className="selfAuthor">Kyle Swanson</span><sup>*</sup>, and James Zou.
                </p>
                <p className="journalText"><span className="journalName">Nature Methods</span>, 2024.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.nature.com/articles/s42256-024-00809-7"> Generative AI
                    for designing and validating easily synthesizable and structurally novel antibiotics</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Gary
                    Liu<sup>*</sup>, Denise B. Catacutan, Autumn Arnold, James Zou, and Jonathan M. Stokes.
                </p>
                <p className="journalText"><span className="journalName">Nature Machine Intelligence</span>, 2024.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/swansonk14/SyntheMol">https://github.com/swansonk14/SyntheMol</a>
                    </p>
                    <p>Data & Models: <a
                        href="https://zenodo.org/records/10257839">https://zenodo.org/records/10257839</a>
                    </p>
                    <h4>News</h4>
                    <p><a href="https://www.nytimes.com/2024/12/30/technology/good-tech-awards.html">The 2024 Good Tech Awards</a>, The New York Times.</p>
                    <p><a href="https://med.stanford.edu/news/all-news/2024/03/ai-drug-development.html">Generative AI
                        develops potential new drugs for antibiotic-resistant bacteria</a>, Stanford Medicine News.</p>
                    <p><a
                        href="https://brighterworld.mcmaster.ca/articles/artificial-intelligence-model-synthemol-superbug-fighting-antibiotics/">Researchers
                        invent artificial intelligence model to design new superbug-fighting antibiotics</a>, Brighter
                        World &ndash; McMaster University.
                    </p>
                    <p><a href="https://www.newyorker.com/magazine/2024/09/09/how-machines-learned-to-discover-drugs">How
                        machines learned to discover drugs</a>, The New Yorker.</p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btae416/7698030?utm_source=authortollfreelink&utm_campaign=bioinformatics&utm_medium=email&guestAccessKey=f4fca1d2-49ec-4b10-b476-5aea3bf37045"> ADMET-AI:
                    A machine learning
                    ADMET platform for evaluation of large-scale chemical libraries</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Parker Walther, Jeremy
                    Leitz, Souhrid Mukherjee, Joseph C. Wu, Rabindra V. Shivnaraine, and James Zou.
                </p>
                <p className="journalText"><span className="journalName">Bioinformatics</span>, 2024.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Website: <a href="https://admet.ai.greenstonebio.com">https://admet.ai.greenstonebio.com</a></p>
                    <p>Blog: <a
                        href="https://portal.valencelabs.com/blogs/post/admet-ai-a-machine-learning-admet-platform-for-evaluation-of-large-scale-QPEa0j5OTYYHTaA">Valence
                        Portal Blog</a></p>
                    <p>Code: <a
                        href="https://github.com/swansonk14/admet_ai">https://github.com/swansonk14/admet_ai</a>
                    </p>
                    <p>Data & Models: <a
                        href="https://zenodo.org/records/10372419">https://zenodo.org/records/10372419</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://www.nature.com/articles/s41589-023-01349-8"> Deep
                    learning-guided discovery of an antibiotic targeting <i>Acinetobacter baumannii</i></a></h2>
                <p className="authorsText"> Gary Liu<sup>*</sup>, Denise B. Catacutan<sup>*</sup>, Khushi
                    Rathod<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span>, Wengong Jin, Jody C. Mohammed,
                    Anush Chiappino-Pepe, Saad A. Syed, Meghan Fragis, Kenneth Rachwalski, Jakob Magolan, Michael G.
                    Surette, Brian K. Coombes, Tommi Jaakkola, Regina Barzilay, James J. Collins, and Jonathan M.
                    Stokes.
                </p>
                <p className="journalText"><span className="journalName">Nature Chemical Biology</span>, 2023.</p>
                <div className="suppInfo">
                    <h4>News</h4>
                    <p><a href="https://www.bbc.com/news/health-65709834">New superbug-killing antibiotic discovered
                        using
                        AI</a>, BBC.</p>
                    <p><a
                        href="https://www.cnn.com/2023/05/25/health/antibiotic-artificial-intelligence-superbug/index.html">A
                        new antibiotic, discovered with artificial intelligence, may defeat a dangerous superbug</a>,
                        CNN.
                    </p>
                    <p><a href="https://news.mit.edu/2023/using-ai-scientists-combat-drug-resistant-infections-0525">Using
                        AI, scientists find a drug that could combat drug-resistant infections</a>, MIT News.</p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://academic.oup.com/pnasnexus/advance-article/doi/10.1093/pnasnexus/pgad171/7173167"> 7-<i>UP</i>:
                    generating <i>in silico</i> CODEX from a small set of immunofluorescence markers</a></h2>
                <p className="authorsText"> Eric Wu<sup>*</sup>, Alexandro E Trevino<sup>*</sup>, Zhenqin Wu, <span
                    className="selfAuthor">Kyle Swanson</span>, Honesty J Kim, H Blaize D’Angio, Ryan Preska, Aaron E
                    Chiou,
                    Gregory W Charville, Piero Dalerba, Umamaheswar Duvvuri, Alexander D Colevas, Jelena Levi, Nikita
                    Bedi,
                    Serena Chang, John Sunwoo, Ann Marie Egloff, Ravindra Uppaluri, Aaron T Mayer, and James Zou.</p>
                <p className="journalText"><span className="journalName">PNAS Nexus</span>, 2023.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://gitlab.com/enable-medicine-public/7-up">https://gitlab.com/enable-medicine-public/7-up</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.sciencedirect.com/science/article/pii/S0092867423000946"> From patterns to
                    patients:
                    Advances in clinical machine learning for cancer diagnosis, prognosis, and treatment</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Eric
                    Wu<sup>*</sup>,
                    Angela Zhang<sup>*</sup>, Ash A. Alizadeh, James Zou.</p>
                <p className="journalText"><span className="journalName">Cell</span>, 2023.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.biorxiv.org/content/10.1101/2023.02.03.526939v1"> Towards Universal Cell
                    Embeddings:
                    Integrating Single-cell RNA-seq Datasets across Species with SATURN</a></h2>
                <p className="authorsText"> Yanay Rosen<sup>*</sup>, Maria Brbić<sup>*</sup>, Yusuf
                    Roohani<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span>, Ziang Li, Jure Leskovec.</p>
                <p className="journalText"><span className="journalName">bioRxiv</span>, 2023.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/snap-stanford/saturn">https://github.com/snap-stanford/saturn</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://proceedings.mlr.press/v200/swanson22a"> Predicting
                    Immune
                    Escape with Pretrained Protein Language Model Embeddings</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Howard Chang<sup>*</sup>,
                    James
                    Zou<sup>*</sup>.</p>
                <p className="journalText"><span className="journalName">Proceedings of Machine Learning Research</span>,
                    2022.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/swansonk14/escape_embeddings">https://github.com/swansonk14/escape_embeddings</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://www.nature.com/articles/s41551-022-00951-w"> Graph
                    deep
                    learning for the characterization of tumour microenvironments from spatial protein profiles in
                    tissue
                    specimens</a></h2>
                <p className="authorsText"> Zhenqin Wu<sup>*</sup>, Alexandro E Trevino<sup>*</sup>, Eric Wu, <span
                    className="selfAuthor">Kyle Swanson</span>, Honesty J Kim, H Blaize D’Angio, Ryan Preska, Gregory W
                    Charville, Piero D Dalerba, Ann Marie Egloff, Ravindra Uppaluri, Umamaheswar Duvvuri, Aaron T Mayer,
                    James Zou.</p>
                <p className="journalText"><span className="journalName">Nature Biomedical Engineering</span>, 2022.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://gitlab.com/enable-medicine-public/space-gm">https://gitlab.com/enable-medicine-public/space-gm</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://arxiv.org/abs/2204.08105"> Monte Carlo Tree Search for
                    Interpreting Stress in Natural Language</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Joy Hsu, Mirac Suzgun.</p>
                <p className="journalText"><span className="journalName">Second Workshop on LT-EDI at ACL</span>, 2022.
                </p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/swansonk14/MCTS_Interpretability">https://github.com/swansonk14/MCTS_Interpretability</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://patents.google.com/patent/US11238278B1/en"> File
                    matching
                    with rationale alignment using neural networks and an optimal transport algorithm</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Lili Yu, Tao Lei.</p>
                <p className="journalText"><span className="journalName">United States Patent US11238278B1</span>, 2022.
                </p>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://www.transperfect.com/dataforce/aisdet-journal"> AI for
                    Drug Development</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Kirk Swanson.</p>
                <p className="journalText"><span className="journalName">Journal of the Italian Association of Digital Health and Telemedicine (AiSDeT)</span>,
                    2021.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.0c00502"> Uncertainty Quantification Using
                    Neural
                    Networks for Molecular Property Prediction</a></h2>
                <p className="authorsText"> Lior Hirschfeld, <span className="selfAuthor">Kyle Swanson</span>, Kevin
                    Yang,
                    Regina Barzilay, and Connor Coley.</p>
                <p className="journalText"><span
                    className="journalName">Journal of Chemical Information and Modeling</span>,
                    2020.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://proceedings.icml.cc/static/paper_files/icml/2020/6209-Paper.pdf"> Improving Molecular
                    Design by Stochastic Iterative Target Augmentation</a></h2>
                <p className="authorsText"> Kevin Yang, Wengong Jin, <span className="selfAuthor">Kyle Swanson</span>,
                    Regina Barzilay, and Tommi Jaakkola.</p>
                <p className="journalText"><span className="journalName">Proceedings of the 37th International Conference on Machine Learning</span>,
                    2020.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://www.aclweb.org/anthology/2020.acl-main.496/"> Rationalizing Text Matching: Learning
                    Sparse
                    Alignments via Optimal Transport</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Lili
                    Yu<sup>*</sup>,
                    and Tao Lei.</p>
                <p className="journalText"><span className="journalName">Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics</span>,
                    2020.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a
                        href="https://github.com/asappresearch/rationale-alignment">github.com/asappresearch/rationale-alignment</a>
                    </p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://www.cell.com/cell/fulltext/S0092-8674(20)30102-1"> A
                    Deep
                    Learning Approach to Antibiotic Discovery</a></h2>
                <p className="authorsText"> Jonathan M. Stokes, Kevin Yang<sup>*</sup>, <span className="selfAuthor">Kyle Swanson</span><sup>*</sup>,
                    Wengong Jin, Andres Cubillos-Ruiz, Nina M. Donghia, Craig R. MacNair, Shawn French, Lindsey A.
                    Carfrae,
                    Zohar Bloom-Ackerman, Victoria M. Tran, Anush Chiappino-Pepe, Ahmed H. Badran, Ian W. Andrews, Emma
                    J.
                    Chory, George M. Church, Eric D. Brown, Tommi S. Jaakkola, Regina Barzilay, and James J. Collins.
                </p>
                <p className="journalText"><span className="journalName">Cell</span>, 2020.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a href="https://github.com/chemprop/chemprop">github.com/chemprop/chemprop</a></p>
                    <p>Demo: <a href="http://chemprop.csail.mit.edu">chemprop.csail.mit.edu</a></p>
                    <br></br>
                    <h4>News</h4>
                    <p><a href="https://www.nature.com/articles/d41586-020-00018-3">Powerful antibiotics discovered
                        using
                        AI</a>, Nature News.</p>
                    <p><a
                        href="https://www.theguardian.com/society/2020/feb/20/antibiotic-that-kills-drug-resistant-bacteria-discovered-through-ai">Powerful
                        antibiotic discovered using machine learning for first time</a>, The Guardian.</p>
                    <p><a href="https://www.bbc.co.uk/news/health-51586010">Scientists discover powerful antibiotic
                        using
                        AI</a>, BBC.</p>
                    <p><a href="http://news.mit.edu/2020/artificial-intelligence-identifies-new-antibiotic-0220">Artificial
                        intelligence yields new antibiotic</a>, MIT News.</p>
                    <p><a href="https://www.newyorker.com/magazine/2024/09/09/how-machines-learned-to-discover-drugs">How
                        machines learned to discover drugs</a>, The New Yorker.</p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://pubs.rsc.org/en/content/articlelanding/2020/sm/c9sm01903k#!divAbstract"> Deep learning
                    for
                    automated classification and characterization of amorphous materials</a></h2>
                <p className="authorsText"> Kirk Swanson, Shubhendu Trivedi, Joshua Lequieu, <span
                    className="selfAuthor">Kyle Swanson</span>,
                    and Risi Kondor.</p>
                <p className="journalText"><span className="journalName">Soft Matter</span>, 2020.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://pubs.acs.org/doi/abs/10.1021/acs.jcim.9b00237"> Analyzing
                    Learned Molecular Representations for Property Prediction</a></h2>
                <p className="authorsText"> Kevin Yang<sup>*</sup>, <span
                    className="selfAuthor">Kyle Swanson</span><sup>*</sup>, Wengong Jin, Connor Coley, Philipp Eiden,
                    Hua
                    Gao, Angel Guzman-Perez, Timothy Hopper, Brian Kelley, Miriam Mathea, Andrew Palmer, Volker Settels,
                    Tommi Jaakkola, Klavs Jensen, and Regina Barzilay.</p>
                <p className="journalText"><span
                    className="journalName">Journal of Chemical Information and Modeling</span>,
                    2019.</p>
                <div className="suppInfo">
                    <h4>Supporting Information</h4>
                    <p>Code: <a href="https://github.com/chemprop/chemprop">github.com/chemprop/chemprop</a></p>
                    <p>Demo: <a href="http://chemprop.csail.mit.edu">chemprop.csail.mit.edu</a></p>
                </div>

                <Divider/>

                <h2 className="publicationTitle"><a href="https://www.aclweb.org/anthology/W19-4104/"> Building a
                    Production
                    Model for Retrieval-Based Chatbots</a></h2>
                <p className="authorsText"><span className="selfAuthor">Kyle Swanson</span>, Lili Yu, Christopher Fox,
                    Jeremy Wohlwend, and Tao Lei.</p>
                <p className="journalText"><span className="journalName">Proceedings of the First Workshop on NLP for Conversational AI at the 57th Annual Meeting of the Association for Computational Linguistics</span>,
                    2019.</p>

                <Divider/>

                <h2 className="publicationTitle"><a
                    href="https://pubs.rsna.org/doi/full/10.1148/radiol.2018180694"> Mammographic Breast Density
                    Assessment
                    Using Deep Learning: Clinical Implementation</a></h2>
                <p className="authorsText"> Constance Lehman, Adam Yala, Tal Schuster, Brian Dontchos, Manisha
                    Bahl, <span
                        className="selfAuthor">Kyle Swanson</span>, and Regina Barzilay.</p>
                <p className="journalText"><span className="journalName">Radiology</span>, 2018.</p>
                <div className="suppInfo">
                    <h4>News</h4>
                    <p><a href="http://news.mit.edu/2018/AI-identifies-dense-tissue-breast-cancer-mammograms-1016">Automated
                        system identifies dense tissue, a risk factor for breast cancer, in mammograms</a>, MIT News.
                    </p>
                </div>

                <br></br>
                <p className="footnote"><sup>*</sup>Denotes equal contribution.</p>
            </div>
        );
    }
}

export default PublicationsPage;
