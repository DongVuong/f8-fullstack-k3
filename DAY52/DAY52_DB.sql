PGDMP  5    '                 |            database_01_VuongDong    14.10 (Homebrew)    16.0                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16541    database_01_VuongDong    DATABASE     y   CREATE DATABASE "database_01_VuongDong" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
 '   DROP DATABASE "database_01_VuongDong";
             	   dongvuong    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
             	   dongvuong    false                       0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                	   dongvuong    false    4            �            1259    16543    courses    TABLE     H  CREATE TABLE public.courses (
    id integer NOT NULL,
    name character varying NOT NULL,
    price text,
    content text NOT NULL,
    teacher_id integer NOT NULL,
    active integer,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now(),
    description text
);
    DROP TABLE public.courses;
       public         heap 	   dongvuong    false    4            �            1259    16542    courses_id_seq    SEQUENCE     �   ALTER TABLE public.courses ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.courses_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   dongvuong    false    210    4            �            1259    16560    teachers    TABLE     �   CREATE TABLE public.teachers (
    id integer NOT NULL,
    name character varying NOT NULL,
    bio text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);
    DROP TABLE public.teachers;
       public         heap 	   dongvuong    false    4            �            1259    16559    teachers_id_seq    SEQUENCE     �   ALTER TABLE public.teachers ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.teachers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public       	   dongvuong    false    4    212                      0    16543    courses 
   TABLE DATA           t   COPY public.courses (id, name, price, content, teacher_id, active, created_at, updated_at, description) FROM stdin;
    public       	   dongvuong    false    210   �                 0    16560    teachers 
   TABLE DATA           I   COPY public.teachers (id, name, bio, created_at, updated_at) FROM stdin;
    public       	   dongvuong    false    212   w                   0    0    courses_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.courses_id_seq', 9, true);
          public       	   dongvuong    false    209            !           0    0    teachers_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.teachers_id_seq', 3, true);
          public       	   dongvuong    false    211            �           2606    16551    courses courses_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_pkey;
       public         	   dongvuong    false    210            �           2606    16564    teachers teachers_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.teachers DROP CONSTRAINT teachers_pkey;
       public         	   dongvuong    false    212            �           2606    16569    courses courses_teacher_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_teacher_foreign FOREIGN KEY (teacher_id) REFERENCES public.teachers(id) NOT VALID;
 I   ALTER TABLE ONLY public.courses DROP CONSTRAINT courses_teacher_foreign;
       public       	   dongvuong    false    212    210    3464               �   x���1
�0@��>�/�`ɒ��=A�	�f	���Z�����q=�qm	�{��9lǙ�s��_���S�e0��g���hd��^;3��Qq-�>�(^//>�'���Ѓ��,8[�}xU�
^-^}xS�	�,�B��]�.x�x��������1�/4�~         ]   x�3�t�L�KW(�L�S0�L���FF&���&
��V&�V�Fz�&�Ʀ(R&V� )CC#Sc.#d���F�i�1�Q�`���4*F���  1     