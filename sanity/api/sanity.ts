import { createClient, groq } from "next-sanity";
import { Project } from "@/Interface/Project";
import { About } from '@/Interface/About';
import clientConfig from './config/client-config'
import { Page } from "@/Interface/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getAbouts(): Promise<About[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "abouts"]{
      name,
      title1,
      title2,
      description1,
      college,
      description2,
      description3,
      quote,
      line,
      "imgge": imgUrl.asset->url,
      resume,
      desc,
      download,
      pccoe
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

