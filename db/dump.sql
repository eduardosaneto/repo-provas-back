--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: disciplines; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.disciplines (
    id integer NOT NULL,
    name character varying NOT NULL,
    "semesterId" integer NOT NULL
);


--
-- Name: disciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.disciplines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: disciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.disciplines_id_seq OWNED BY public.disciplines.id;


--
-- Name: disciplines_professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.disciplines_professors (
    id integer NOT NULL,
    "disciplineId" integer NOT NULL,
    "professorId" integer NOT NULL
);


--
-- Name: disciplines_professors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.disciplines_professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: disciplines_professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.disciplines_professors_id_seq OWNED BY public.disciplines_professors.id;


--
-- Name: exams; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.exams (
    id integer NOT NULL,
    name character varying NOT NULL,
    "examLink" character varying NOT NULL,
    "disciplineId" integer NOT NULL,
    "professorId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


--
-- Name: exams_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.exams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: exams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.exams_id_seq OWNED BY public.exams.id;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: semesters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.semesters (
    id integer NOT NULL,
    name character varying NOT NULL
);


--
-- Name: semesters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.semesters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: semesters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.semesters_id_seq OWNED BY public.semesters.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: disciplines id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines ALTER COLUMN id SET DEFAULT nextval('public.disciplines_id_seq'::regclass);


--
-- Name: disciplines_professors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines_professors ALTER COLUMN id SET DEFAULT nextval('public.disciplines_professors_id_seq'::regclass);


--
-- Name: exams id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams ALTER COLUMN id SET DEFAULT nextval('public.exams_id_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: semesters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semesters ALTER COLUMN id SET DEFAULT nextval('public.semesters_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.categories VALUES (1, 'P1');
INSERT INTO public.categories VALUES (2, 'P2');
INSERT INTO public.categories VALUES (3, 'P3');
INSERT INTO public.categories VALUES (4, '2Ch');
INSERT INTO public.categories VALUES (5, 'Outras');


--
-- Data for Name: disciplines; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disciplines VALUES (1, 'Cálculo 1', 1);
INSERT INTO public.disciplines VALUES (2, 'Cálculo 2', 2);
INSERT INTO public.disciplines VALUES (3, 'Cálculo 4', 3);
INSERT INTO public.disciplines VALUES (4, 'Cálculo 4', 4);
INSERT INTO public.disciplines VALUES (5, 'CFD', 11);


--
-- Data for Name: disciplines_professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.disciplines_professors VALUES (1, 1, 1);
INSERT INTO public.disciplines_professors VALUES (2, 2, 2);
INSERT INTO public.disciplines_professors VALUES (3, 3, 3);
INSERT INTO public.disciplines_professors VALUES (4, 4, 4);
INSERT INTO public.disciplines_professors VALUES (5, 5, 5);


--
-- Data for Name: exams; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.exams VALUES (1, '2019.2', 'https://arquimedes.nce.ufrj.br/calculo2/papers/calc2_2019_2_p1.pdf', 2, 2, 1);
INSERT INTO public.exams VALUES (2, '2018.1', 'https://arquimedes.nce.ufrj.br/calculo2/papers/calc2_2018_1_p2ach.pdf', 2, 2, 4);
INSERT INTO public.exams VALUES (3, '2017.1', 'https://arquimedes.nce.ufrj.br/calculo2/papers/C2-2017-1-P1.pdf', 2, 2, 1);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.migrations VALUES (1, 1629085520906, 'CriaTabelaCategories1629085520906');
INSERT INTO public.migrations VALUES (2, 1629085692360, 'CriaTabelaSemesters1629085692360');
INSERT INTO public.migrations VALUES (3, 1629086398493, 'CriaTabelaSemesters1629086398493');
INSERT INTO public.migrations VALUES (4, 1629086621056, 'CriaTabelaDisciplines1629086621056');
INSERT INTO public.migrations VALUES (5, 1629088200201, 'CriaTabelaProfessors1629088200201');
INSERT INTO public.migrations VALUES (6, 1629089131032, 'CriaTabelaDisciplinesProfessors1629089131032');
INSERT INTO public.migrations VALUES (7, 1629090224062, 'CriaTabelaExams1629090224062');


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.professors VALUES (1, 'Jair Salvador');
INSERT INTO public.professors VALUES (2, 'Thiago Garcia');
INSERT INTO public.professors VALUES (3, 'Anatoly Leontiv');
INSERT INTO public.professors VALUES (4, 'Marcos Cabral');
INSERT INTO public.professors VALUES (5, 'Tania Klein');


--
-- Data for Name: semesters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.semesters VALUES (1, '1');
INSERT INTO public.semesters VALUES (2, '2');
INSERT INTO public.semesters VALUES (3, '3');
INSERT INTO public.semesters VALUES (4, '4');
INSERT INTO public.semesters VALUES (5, '5');
INSERT INTO public.semesters VALUES (6, '6');
INSERT INTO public.semesters VALUES (7, '7');
INSERT INTO public.semesters VALUES (8, '8');
INSERT INTO public.semesters VALUES (9, '9');
INSERT INTO public.semesters VALUES (10, '10');
INSERT INTO public.semesters VALUES (11, 'Eletivas');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- Name: disciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.disciplines_id_seq', 5, true);


--
-- Name: disciplines_professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.disciplines_professors_id_seq', 5, true);


--
-- Name: exams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.exams_id_seq', 3, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.migrations_id_seq', 7, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.professors_id_seq', 5, true);


--
-- Name: semesters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.semesters_id_seq', 11, true);


--
-- Name: disciplines_professors PK_20de3ee5dc7e37cfdeadb7ac665; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines_professors
    ADD CONSTRAINT "PK_20de3ee5dc7e37cfdeadb7ac665" PRIMARY KEY (id);


--
-- Name: categories PK_24dbc6126a28ff948da33e97d3b; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY (id);


--
-- Name: semesters PK_25c393e2e76b3e32e87a79b1dc2; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.semesters
    ADD CONSTRAINT "PK_25c393e2e76b3e32e87a79b1dc2" PRIMARY KEY (id);


--
-- Name: professors PK_6b249c6363a154820c909c45e27; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT "PK_6b249c6363a154820c909c45e27" PRIMARY KEY (id);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: disciplines PK_9b25ea6da0741577a73c9e90aad; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT "PK_9b25ea6da0741577a73c9e90aad" PRIMARY KEY (id);


--
-- Name: exams PK_b43159ee3efa440952794b4f53e; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "PK_b43159ee3efa440952794b4f53e" PRIMARY KEY (id);


--
-- Name: disciplines_professors FK_060cd22e3f81a814fda02c32ab1; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines_professors
    ADD CONSTRAINT "FK_060cd22e3f81a814fda02c32ab1" FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- Name: exams FK_448fb069febfdb9e6a519121aab; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "FK_448fb069febfdb9e6a519121aab" FOREIGN KEY ("disciplineId") REFERENCES public.disciplines(id);


--
-- Name: exams FK_a4b572eed2e7293985b93a55eb3; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "FK_a4b572eed2e7293985b93a55eb3" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: exams FK_bcfdfcbfb5fe82b98eb79ac5818; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT "FK_bcfdfcbfb5fe82b98eb79ac5818" FOREIGN KEY ("professorId") REFERENCES public.professors(id);


--
-- Name: disciplines FK_bfb0beefc540ccb9924db227208; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT "FK_bfb0beefc540ccb9924db227208" FOREIGN KEY ("semesterId") REFERENCES public.semesters(id);


--
-- Name: disciplines_professors FK_cc516e8d6fd4f51a5b8f5c982c2; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.disciplines_professors
    ADD CONSTRAINT "FK_cc516e8d6fd4f51a5b8f5c982c2" FOREIGN KEY ("disciplineId") REFERENCES public.disciplines(id);


--
-- PostgreSQL database dump complete
--

