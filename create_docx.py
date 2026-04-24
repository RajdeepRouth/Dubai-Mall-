import os
from docx import Document
from docx.shared import Pt, Inches

def create_docx():
    doc = Document()
    
    # Title
    doc.add_heading('Dubai Mall Deck - Source Code', 0)
    
    files_to_add = [
        'index.html',
        'src/index.css',
        'src/App.jsx',
        'src/components/Navigation.jsx',
        'src/components/SlideWrapper.jsx',
        'src/slides/IntroSlide.jsx',
        'src/slides/PropertyStatsSlide.jsx',
        'src/slides/ExperiencesSlide.jsx',
        'src/slides/EventsSlide.jsx',
        'src/slides/CTASlide.jsx'
    ]
    
    for file_path in files_to_add:
        if os.path.exists(file_path):
            # Heading for the file
            heading = doc.add_heading(file_path, level=1)
            
            # Read content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Add code content
            para = doc.add_paragraph(content)
            para.style.font.name = 'Courier New'
            para.style.font.size = Pt(9)
            
            doc.add_page_break()
    
    output_path = 'Dubai_Mall_Deck_Source_Code.docx'
    doc.save(output_path)
    print(f"Successfully created {output_path}")

if __name__ == '__main__':
    create_docx()
